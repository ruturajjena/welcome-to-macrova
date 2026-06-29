// @ts-nocheck
/**
 * Landing-page interactions ported verbatim from the original static site:
 * platform-aware store routing, nav scroll state, mobile menu, reveal-on-scroll,
 * count-up stats, CTA typewriter, hero parallax tilt, and the particle canvas.
 *
 * Returns a cleanup function so React can tear down listeners on unmount.
 */
export function initLandingEffects(): () => void {
  // Guard against React 18 StrictMode double-invocation in dev.
  if (typeof window === "undefined") return () => {};
  if (window.__macrovaInit) return () => {};
  window.__macrovaInit = true;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const teardown: Array<() => void> = [];
  const on = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts);
    teardown.push(() => target.removeEventListener(type, fn, opts));
  };

  /* Platform-aware store routing. */
  const APPSTORE =
    "https://apps.apple.com/in/app/macrova-ai-calorie-counter/id6778376235";
  const PLAY =
    "https://play.google.com/store/apps/details?id=com.ruturajjena.junkfoodtracker";
  const ua = navigator.userAgent || navigator.vendor || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);
  if (isIOS || isAndroid) {
    const dest = isIOS ? APPSTORE : PLAY;
    document.querySelectorAll('[data-store="auto"]').forEach((a) => {
      a.setAttribute("href", dest);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }

  /* Nav scroll state */
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    on(window, "scroll", onScroll, { passive: true });
  }

  /* Mobile menu */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    const openMenu = (open) => {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    };
    on(toggle, "click", () =>
      openMenu(!menu.classList.contains("open"))
    );
    menu.querySelectorAll("[data-close]").forEach((a) => {
      on(a, "click", () => openMenu(false));
    });
    on(document, "keydown", (e) => {
      if (e.key === "Escape") openMenu(false);
    });
  }

  /* Reveal-on-scroll, counters and CTA typewriter */
  let revealEls = [].slice.call(document.querySelectorAll(".reveal"));
  let counters = [].slice.call(document.querySelectorAll("[data-count]"));
  const ctaType = document.getElementById("ctaType");

  function inView(el, ratio) {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.height === 0) return r.top < vh && r.bottom > 0;
    const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0);
    return visible > 0 && visible / Math.min(r.height, vh) >= (ratio || 0.12);
  }

  function runCount(el) {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const fmt = (v) =>
      (Number.isInteger(target) ? Math.round(v) : v.toFixed(1)) + suffix;
    if (reduce) {
      el.textContent = fmt(target);
      return;
    }
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  let twDone = false;
  function typeCTA() {
    if (!ctaType || twDone) return;
    twDone = true;
    const pre = ctaType.getAttribute("data-pre");
    const grad = ctaType.getAttribute("data-grad");
    const s = ctaType.querySelector(".tw-static");
    const g = ctaType.querySelector(".tw-grad");
    if (reduce) {
      s.textContent = pre;
      g.textContent = grad;
      return;
    }
    let i = 0;
    let j = 0;
    (function tick() {
      if (i < pre.length) {
        s.textContent = pre.slice(0, ++i);
        setTimeout(tick, 70);
      } else if (j < grad.length) {
        g.textContent = grad.slice(0, ++j);
        setTimeout(tick, 85);
      }
    })();
  }

  if (reduce) {
    revealEls.forEach((e) => e.classList.add("in"));
  }

  function checkAll() {
    for (let i = revealEls.length - 1; i >= 0; i--) {
      if (inView(revealEls[i], 0.12)) {
        revealEls[i].classList.add("in");
        revealEls.splice(i, 1);
      }
    }
    for (let k = counters.length - 1; k >= 0; k--) {
      if (inView(counters[k], 0.5)) {
        runCount(counters[k]);
        counters.splice(k, 1);
      }
    }
    if (ctaType && !twDone && inView(ctaType, 0.4)) typeCTA();
  }

  let ticking = false;
  function onViewCheck() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        checkAll();
        ticking = false;
      });
    }
  }
  on(window, "scroll", onViewCheck, { passive: true });
  on(window, "resize", onViewCheck, { passive: true });
  on(window, "load", checkAll);
  checkAll();

  /* IntersectionObserver as a second trigger path */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const t = en.target;
          if (t.classList.contains("reveal")) t.classList.add("in");
          if (t.hasAttribute("data-count")) runCount(t);
          if (t === ctaType) typeCTA();
          io.unobserve(t);
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    document
      .querySelectorAll(".reveal, [data-count]")
      .forEach((el) => io.observe(el));
    if (ctaType) io.observe(ctaType);
    teardown.push(() => io.disconnect());
  }

  /* Hero phone-cluster parallax tilt (desktop, fine pointer, non-reduced) */
  const cluster = document.getElementById("cluster");
  if (cluster && !reduce && window.matchMedia("(pointer:fine)").matches) {
    const stage = cluster.closest(".hero-stage");
    let raf = null;
    let tx = 0;
    let ty = 0;
    on(stage, "mousemove", (e) => {
      const r = stage.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf)
        raf = requestAnimationFrame(() => {
          cluster.style.transform =
            "rotateY(" + tx * 6 + "deg) rotateX(" + -ty * 4 + "deg)";
          raf = null;
        });
    });
    on(stage, "mouseleave", () => {
      cluster.style.transform = "";
    });
  }

  /* Lightweight particle field */
  const canvas = document.getElementById("particles");
  if (canvas && !reduce) {
    const ctx = canvas.getContext("2d");
    let w;
    let h;
    let raf2;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let parts = [];
    const COUNT = window.innerWidth < 640 ? 26 : 52;
    const colors = [
      "rgba(52,200,224,",
      "rgba(125,235,196,",
      "rgba(232,184,80,",
    ];
    function resize() {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }
    function makeParts() {
      parts = [];
      for (let i = 0; i < COUNT; i++) {
        parts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: (Math.random() * 1.6 + 0.5) * dpr,
          vx: (Math.random() - 0.5) * 0.18 * dpr,
          vy: (Math.random() - 0.5) * 0.18 * dpr,
          a: Math.random() * 0.5 + 0.15,
          c: colors[i % colors.length],
        });
      }
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + p.a + ")";
        ctx.fill();
      }
      raf2 = requestAnimationFrame(tick);
    }
    resize();
    makeParts();
    tick();
    let rt;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        resize();
        makeParts();
      }, 200);
    };
    on(window, "resize", onResize);
    teardown.push(() => raf2 && cancelAnimationFrame(raf2));
  }

  return () => {
    teardown.forEach((fn) => fn());
    window.__macrovaInit = false;
  };
}
