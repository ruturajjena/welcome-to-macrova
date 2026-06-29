"use client";

import { useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { initLandingEffects } from "@/lib/landing-effects";

export default function Home() {
  useEffect(() => {
    const cleanup = initLandingEffects();
    return cleanup;
  }, []);

  return (
    <>
      <a href="#features" className="skip-link">
        Skip to content
      </a>

      {/* Ambient background */}
      <div className="page-aura" aria-hidden="true">
        <div className="aura-blob aura-1"></div>
        <div className="aura-blob aura-2"></div>
        <div className="aura-blob aura-3"></div>
      </div>
      <canvas id="particles" aria-hidden="true"></canvas>

      {/* NAV */}
      <nav id="nav">
        <a href="#" className="nav-brand" aria-label="Macrova home">
          <span className="nav-brand-icon">
            <img src="/assets/logo.png" alt="" width={38} height={38} />
          </span>
          <span className="nav-brand-name">
            macro<span>va</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#features" className="link">
            Features
          </a>
          <a href="#how" className="link">
            How it works
          </a>
          <a href="#preview" className="link">
            Preview
          </a>
          <a href="#proof" className="link">
            Reviews
          </a>
          <a href="#faq" className="link">
            FAQ
          </a>
          <a href="#download" className="btn-nav" data-store="auto">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5z" />
            </svg>
            Download Free
          </a>
        </div>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobileMenu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className="mobile-menu" id="mobileMenu">
        <a href="#features" data-close>
          Features
        </a>
        <a href="#how" data-close>
          How it works
        </a>
        <a href="#preview" data-close>
          Preview
        </a>
        <a href="#proof" data-close>
          Reviews
        </a>
        <a href="#faq" data-close>
          FAQ
        </a>
        <a href="#download" className="btn-nav" data-store="auto" data-close>
          Download Free
        </a>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="hero-badge hero-load d1">
          <span className="dot"></span>AI Meal &amp; Workout Plans · Free
        </div>

        <h1 className="hero-load d2">
          Your AI <span className="grad">meal plan</span>
          <br />&amp; <span className="grad">workout split</span>,<br />
          built in one tap.
        </h1>

        <p className="hero-sub hero-load d3">
          Tell Macrova your goal and its AI instantly builds a full week of meals
          and a personalized gym plan around your body — then tracks every macro
          from a single photo. Your whole nutrition coach, free in your pocket.
        </p>

        <div className="hero-ctas hero-load d4">
          <a href="#download" className="btn-primary" data-store="auto">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5z" />
            </svg>
            Get your free plan
          </a>
          <a href="#features" className="btn-secondary">
            See how it works
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        <div className="hero-meta hero-load d4">
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
            </svg>
            Now on iOS &amp; Android
          </span>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Free — no card needed
          </span>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15 15 0 010 20 15 15 0 010-20z" />
            </svg>
            7 languages
          </span>
        </div>

        {/* 3-PHONE CLUSTER */}
        <div className="hero-stage hero-load d5">
          <div className="phone-cluster" id="cluster">
            <div className="device side left">
              <div className="notch"></div>
              <img
                src="/assets/phone-hero-center.png"
                alt="Macrova dashboard tracking daily calories and macros"
                width={222}
                height={481}
                loading="lazy"
              />
            </div>
            <div className="device center">
              <div className="notch"></div>
              <img
                src="/assets/phone-hero-right.png"
                alt="AI-generated weekly meal plan in Macrova"
                width={268}
                height={582}
                fetchPriority="high"
              />
            </div>
            <div className="device side right">
              <div className="notch"></div>
              <img
                src="/assets/feat-plans.png"
                alt="AI-generated workout split in Macrova"
                width={222}
                height={481}
                loading="lazy"
              />
            </div>
          </div>

          <div className="ai-pill">
            <span
              className="pi"
              style={{ background: "rgba(125,235,196,0.16)", color: "var(--mint)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9z" />
              </svg>
            </span>
            <span>
              <b>Plan ready</b>
              <span className="cap">Generated in 8s</span>
            </span>
          </div>

          <div className="ai-pill two">
            <span
              className="pi"
              style={{ background: "rgba(52,200,224,0.16)", color: "var(--aqua)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <span>
              <b>Photo logged</b>
              <span className="cap">Macros in seconds</span>
            </span>
          </div>
        </div>
      </header>

      {/* STAT STRIP */}
      <section className="stats" aria-label="Key facts">
        <div className="stats-grid">
          <div className="stat reveal">
            <div className="stat-num">
              <span data-count="4" data-suffix="">
                0
              </span>
            </div>
            <div className="stat-label">AI tools in one app</div>
          </div>
          <div className="stat reveal" data-delay="1">
            <div className="stat-num">
              <span data-count="7" data-suffix="+">
                0
              </span>
            </div>
            <div className="stat-label">Languages supported</div>
          </div>
          <div className="stat reveal" data-delay="2">
            <div className="stat-num">
              <span data-count="3" data-suffix="s">
                0
              </span>
            </div>
            <div className="stat-label">To log a meal by photo</div>
          </div>
          <div className="stat reveal" data-delay="3">
            <div className="stat-num">
              <span data-count="100" data-suffix="%">
                0
              </span>
            </div>
            <div className="stat-label">Free to download</div>
          </div>
        </div>
      </section>

      {/* INTRO / DEFINITION */}
      <section className="block" id="intro" style={{ paddingBottom: 0 }}>
        <div className="container">
          <p className="intro-lead reveal">
            <strong>
              Macrova is a free AI nutrition and calorie tracker for iOS and
              Android.
            </strong>{" "}
            It logs food from a photo, sets personalized calorie and macro targets
            based on your goals, and generates AI meal plans and AI workout plans —
            so calorie counting, macro tracking, and workout planning live in one
            app instead of three.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="block" id="features">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">The core of Macrova</div>
            <h2 className="section-title">
              AI builds the plan.
              <br />
              You just show up.
            </h2>
            <p className="section-sub">
              Most apps make you do the work. Macrova hands you a done-for-you meal
              plan and gym split on day one — then keeps them on track
              automatically.
            </p>
          </div>

          <div className="features-grid">
            {/* BIG: AI Meal & Workout Plans */}
            <div className="feat big reveal">
              <div className="feat-glow"></div>
              <div>
                <div className="feat-tags">
                  <span className="feat-tag teal">AI Plans</span>
                  <span className="feat-tag">Most loved</span>
                </div>
                <div className="feat-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6.5 6.5a4.5 4.5 0 016.4 0M4 4a8 8 0 0111.3 0" />
                    <path d="M14 13l6 6M16 11l5 5" />
                    <circle cx="9" cy="9" r="2" />
                  </svg>
                </div>
                <h3>A full meal plan &amp; workout split — generated for you</h3>
                <p>
                  Pick your goal and Macrova&apos;s AI instantly builds a week of
                  meals with exact macros and a personalized gym program with sets,
                  reps, and rest. Don&apos;t like it? Regenerate in seconds. This is
                  the feature people download Macrova for.
                </p>
              </div>
              <div className="device feat-device">
                <div className="notch"></div>
                <img
                  src="/assets/phone-hero-right.png"
                  alt="AI-generated weekly meal plan with macros in Macrova"
                  loading="lazy"
                  width={264}
                  height={573}
                />
              </div>
            </div>

            {/* AI Workout split */}
            <div className="feat reveal" data-delay="1">
              <div className="feat-glow"></div>
              <span className="feat-tag">AI Plans</span>
              <div className="feat-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6.5 6.5l11 11M21 3l-6 1 5 5 1-6zM3 21l6-1-5-5-1 6z" />
                </svg>
              </div>
              <h3>Personalized workout splits</h3>
              <p>
                Push-pull-legs, full body, or your own style — Macrova programs your
                week with the right sessions, exercises, and progression for your
                level.
              </p>
              <div className="device feat-device">
                <div className="notch"></div>
                <img
                  src="/assets/feat-plans.png"
                  alt="AI workout split with exercises in Macrova"
                  loading="lazy"
                  width={230}
                  height={500}
                />
              </div>
            </div>

            {/* AI Food Scanner */}
            <div className="feat reveal" data-delay="2">
              <div className="feat-glow"></div>
              <span className="feat-tag teal">AI Scanner</span>
              <div className="feat-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 9a2 2 0 012-2h1l1-2h6l1 2h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <circle cx="10" cy="12" r="3.2" />
                  <path d="M19 4l.6 1.4L21 6l-1.4.6L19 8l-.6-1.4L17 6l1.4-.6z" />
                </svg>
              </div>
              <h3>Log food with a photo</h3>
              <p>
                Point, shoot, done. The AI identifies your meal and logs the full
                macro breakdown instantly — no searching, no weighing, no guessing.
              </p>
              <div className="device feat-device">
                <div className="notch"></div>
                <img
                  src="/assets/feat-scan.png"
                  alt="Macrova analyzing a photo of a meal to log its nutrition"
                  loading="lazy"
                  width={230}
                  height={500}
                />
              </div>
            </div>

            {/* Macro tracking */}
            <div className="feat reveal" data-delay="3">
              <div className="feat-glow"></div>
              <div className="feat-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a9 9 0 019 9h-9z" />
                  <circle cx="12" cy="12" r="3.4" />
                </svg>
              </div>
              <h3>Targets that fit you</h3>
              <p>
                Lose fat, build muscle, or maintain — Macrova sets precise daily
                calorie and macro goals for your body and updates them as you
                progress.
              </p>
              <div className="device feat-device">
                <div className="notch"></div>
                <img
                  src="/assets/feat-targets.png"
                  alt="Daily calorie and macro targets in Macrova"
                  loading="lazy"
                  width={230}
                  height={500}
                />
              </div>
            </div>

            {/* Health lab */}
            <div className="feat reveal" data-delay="4">
              <div className="feat-glow"></div>
              <div className="feat-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 3v6l-5 8a2 2 0 002 3h12a2 2 0 002-3l-5-8V3" />
                  <path d="M8 3h8M8 13h8" />
                </svg>
              </div>
              <h3>AI Health Lab</h3>
              <p>
                Go beyond calorie counts. Macrova spots gaps in your nutrition and
                delivers personalized weekly recommendations to keep you improving.
              </p>
              <div className="device feat-device">
                <div className="notch"></div>
                <img
                  src="/assets/feat-healthlab.png"
                  alt="AI Health Lab weekly insights in Macrova"
                  loading="lazy"
                  width={230}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="block" id="how">
        <div className="container head-center">
          <div className="reveal">
            <div className="eyebrow">Getting started</div>
            <h2 className="section-title">
              Up and running
              <br />
              in three steps.
            </h2>
          </div>
          <div className="steps">
            <div className="step reveal" data-delay="1">
              <div className="step-num">1</div>
              <h3>Set your goal</h3>
              <p>
                Tell Macrova what you&apos;re working toward — weight loss, muscle
                gain, or better habits. It sets your daily calorie and macro targets
                automatically.
              </p>
            </div>
            <div className="step reveal" data-delay="2">
              <div className="step-num">2</div>
              <h3>Log your meals</h3>
              <p>
                Search a global food database, scan a barcode, or just snap a photo.
                Calories and macros update instantly after every meal.
              </p>
            </div>
            <div className="step reveal" data-delay="3">
              <div className="step-num">3</div>
              <h3>Let AI do the rest</h3>
              <p>
                Generate a weekly meal and workout plan with one tap, then review
                your AI Health Lab insights to keep improving week over week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="block" id="languages">
        <div className="container">
          <div className="lang-wrap">
            <div className="reveal">
              <div className="lang-phone">
                <img
                  src="/assets/phone-hindi.png"
                  alt="Macrova's Daily Blueprint screen shown in Hindi"
                  loading="lazy"
                  width={290}
                  height={628}
                />
              </div>
              <div className="lang-phone-label">हिंदी · Daily Blueprint screen</div>
            </div>
            <div className="reveal" data-delay="1">
              <div className="eyebrow">Global reach</div>
              <h2 className="section-title">
                Speaks your
                <br />
                language.
              </h2>
              <p className="section-sub">
                Macrova is fully localized in 7 languages, so every user gets a
                native experience — from onboarding to daily tracking to AI insights.
              </p>
              <div className="lang-grid">
                <div className="lang-chip">
                  <span className="lang-code">EN</span>
                  <span className="lang-name">English</span>
                </div>
                <div className="lang-chip">
                  <span className="lang-code">HI</span>
                  <span>
                    <span className="lang-name">Hindi</span>{" "}
                    <span className="lang-native">हिंदी</span>
                  </span>
                </div>
                <div className="lang-chip">
                  <span className="lang-code">OR</span>
                  <span>
                    <span className="lang-name">Odia</span>{" "}
                    <span className="lang-native">ଓଡ଼ିଆ</span>
                  </span>
                </div>
                <div className="lang-chip">
                  <span className="lang-code">FR</span>
                  <span className="lang-name">French</span>
                </div>
                <div className="lang-chip">
                  <span className="lang-code">ES</span>
                  <span className="lang-name">Spanish</span>
                </div>
                <div className="lang-chip">
                  <span className="lang-code">DE</span>
                  <span className="lang-name">German</span>
                </div>
                <div className="lang-chip">
                  <span className="lang-code">JA</span>
                  <span>
                    <span className="lang-name">Japanese</span>{" "}
                    <span className="lang-native">日本語</span>
                  </span>
                </div>
              </div>
              <p className="lang-note">
                More languages coming soon as we expand globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL SHOWCASE — shadcn/ui ContainerScroll component */}
      <section className="scroll-showcase" id="showcase">
        <ContainerScroll
          titleComponent={
            <div style={{ marginBottom: "1rem" }}>
              <p
                className="eyebrow"
                style={{ justifyContent: "center", display: "inline-flex" }}
              >
                See it in motion
              </p>
              <div
                className="ss-title"
                style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", lineHeight: 1.08 }}
              >
                Your day, in one
                <br />
                <span className="ss-grad" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
                  intelligent view
                </span>
              </div>
            </div>
          }
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0c0f12",
            }}
          >
            <img
              src="/assets/phone-hero-center.png"
              alt="Macrova dashboard showing daily calories and macros"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </section>

      {/* PREVIEW MARQUEE */}
      <section className="marquee-section" id="preview">
        <div className="container head-center">
          <div className="reveal">
            <div className="eyebrow">App preview</div>
            <h2 className="section-title">A closer look at Macrova.</h2>
            <p className="section-sub">
              A clean, intelligent tracker designed to feel effortless. Hover to
              pause the reel.
            </p>
          </div>
        </div>
        <div className="marquee-wrap reveal">
          <div className="marquee">
            {[
              "phone-hero-center.png",
              "feat-scan.png",
              "shot-1.png",
              "feat-plans.png",
              "shot-2.png",
              "feat-healthlab.png",
              "shot-3.png",
              "phone-hero-left.png",
              "shot-4.png",
              "phone-hero-right.png",
            ].map((f) => (
              <div className="marquee-item" key={f}>
                <img
                  src={`/assets/${f}`}
                  alt="Macrova screen"
                  loading="lazy"
                  width={220}
                  height={476}
                />
              </div>
            ))}
            {/* duplicate set for seamless loop */}
            {[
              "phone-hero-center.png",
              "feat-scan.png",
              "shot-1.png",
              "feat-plans.png",
              "shot-2.png",
              "feat-healthlab.png",
              "shot-3.png",
              "phone-hero-left.png",
              "shot-4.png",
              "phone-hero-right.png",
            ].map((f) => (
              <div className="marquee-item" aria-hidden="true" key={`dup-${f}`}>
                <img
                  src={`/assets/${f}`}
                  alt=""
                  loading="lazy"
                  width={220}
                  height={476}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="block" id="proof">
        <div className="container head-center">
          <div className="reveal">
            <div className="eyebrow">What users say</div>
            <h2 className="section-title">
              Loved by
              <br />
              early users.
            </h2>
          </div>
          <div className="proof-grid" style={{ textAlign: "left" }}>
            <div className="proof-card reveal" data-delay="1">
              <span className="proof-quote" aria-hidden="true">
                ”
              </span>
              <div className="stars" aria-label="Rated 5 out of 5 stars">
                ★★★★★
              </div>
              <p>
                Finally a nutrition app that doesn&apos;t make me feel like I need a
                degree in dietetics. The AI meal plans are genuinely useful and the
                photo logging is fast.
              </p>
              <div className="proof-author">
                <div className="proof-avatar" aria-hidden="true">
                  A
                </div>
                <div className="meta">
                  <strong>Early adopter</strong>
                  <span>Google Play Review</span>
                </div>
              </div>
            </div>
            <div className="proof-card reveal" data-delay="2">
              <span className="proof-quote" aria-hidden="true">
                ”
              </span>
              <div className="stars" aria-label="Rated 5 out of 5 stars">
                ★★★★★
              </div>
              <p>
                The workout + nutrition combo in one app is exactly what I needed.
                I&apos;ve tried five trackers — Macrova is the only one I&apos;ve
                actually stuck with.
              </p>
              <div className="proof-author">
                <div className="proof-avatar" aria-hidden="true">
                  R
                </div>
                <div className="meta">
                  <strong>Verified user</strong>
                  <span>Google Play Review</span>
                </div>
              </div>
            </div>
            <div className="proof-card reveal" data-delay="3">
              <span className="proof-quote" aria-hidden="true">
                ”
              </span>
              <div className="stars" aria-label="Rated 5 out of 5 stars">
                ★★★★★
              </div>
              <p>
                AI Health Lab is a feature I didn&apos;t know I needed. Seeing my
                weekly eating patterns laid out clearly pushed me to actually be
                consistent.
              </p>
              <div className="proof-author">
                <div className="proof-avatar" aria-hidden="true">
                  S
                </div>
                <div className="meta">
                  <strong>Verified user</strong>
                  <span>Google Play Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="container head-center" style={{ textAlign: "center" }}>
          <div className="reveal">
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">
              Questions about
              <br />
              AI nutrition tracking.
            </h2>
          </div>
          <div className="faq-list">
            <div className="faq-item reveal">
              <h3>What is Macrova?</h3>
              <p>
                Macrova is a free AI-powered nutrition and macro tracker for iOS and
                Android. It logs food from a photo, sets personalized calorie and
                macro targets based on your goals, and generates AI meal plans and
                workout plans. Its AI Health Lab analyzes your weekly eating patterns
                and gives personalized recommendations.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>Is Macrova free?</h3>
              <p>
                Yes. Macrova is free to download and start using, including AI photo
                food logging and personalized calorie and macro targets. An optional
                Premium upgrade unlocks AI meal plans and AI workout plans tailored to
                your goals, schedule, and fitness level.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>How does Macrova&apos;s AI photo food logging work?</h3>
              <p>
                You point your camera at a meal and Macrova&apos;s AI identifies the
                food and logs its full macro breakdown — calories, protein, carbs,
                and fat — instantly. There is no manual searching or guessing at
                portion sizes, which makes daily calorie tracking far faster than
                typical apps.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>Does Macrova create AI workout plans too?</h3>
              <p>
                Yes. Beyond nutrition, Macrova generates a personalized gym split as
                an AI workout plan built from your goals, schedule, and fitness level.
                Combining AI meal plans and AI workout tracking in one app means your
                nutrition and training stay aligned to the same goal.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>Is Macrova available on iPhone?</h3>
              <p>
                Yes. Macrova is available on iPhone via the App Store and on Android
                via the Google Play Store. The app is localized in seven languages:
                English, Hindi, Odia, French, Spanish, German, and Japanese.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>What makes Macrova different from other calorie tracking apps?</h3>
              <p>
                Macrova combines AI photo food logging, personalized macro targets,
                AI meal plans, and AI workout plans in one app, plus an AI Health Lab
                that turns your eating patterns into weekly insights. Most calorie
                trackers handle logging alone; Macrova also plans and coaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card reveal">
          <h2
            id="ctaType"
            data-pre="Ready to track "
            data-grad="smarter?"
            aria-label="Ready to track smarter?"
          >
            <span className="tw-static"></span>
            <span className="grad tw-grad"></span>
            <span className="type-caret" aria-hidden="true">
              |
            </span>
          </h2>
          <p>
            Get your free AI meal plan and workout split in under a minute. No card,
            no commitment — just download and start.
          </p>
          <div className="store-btns" id="download">
            <a
              href="https://apps.apple.com/in/app/macrova-ai-calorie-counter/id6778376235"
              className="store-btn live"
              target="_blank"
              rel="noopener"
              aria-label="Download Macrova on the App Store"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.5 1.6c0 1.2-.5 2.4-1.3 3.2-.9.9-2.3 1.6-3.5 1.5-.1-1.2.5-2.4 1.3-3.2.9-.9 2.4-1.6 3.5-1.5zM20.6 16.9c-.6 1.4-.9 2-1.7 3.2-1.1 1.7-2.6 3.7-4.5 3.7-1.7 0-2.1-1.1-4.4-1.1s-2.8 1.1-4.4 1.1c-1.9 0-3.4-1.9-4.5-3.5C-.5 16-1 10.6 1.4 7.9 2.6 6.5 4.3 5.7 6 5.7c1.8 0 2.9 1.1 4.4 1.1 1.4 0 2.3-1.1 4.4-1.1 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.3 1.6 9z" />
              </svg>
              <span className="store-txt">
                <span className="store-sub">Download on the</span>
                <span className="store-name">App Store</span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ruturajjena.junkfoodtracker"
              className="store-btn live"
              target="_blank"
              rel="noopener"
              aria-label="Get Macrova on Google Play"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.18 23.76a2 2 0 001.6-.22l13.14-7.58L14.6 12 3.18 23.76zM20.54 10.27L17.7 8.65 14.28 12l3.42 3.35 2.84-1.63a2 2 0 000-3.45zM2.01 1.1A2 2 0 002 1.6v20.8a2 2 0 00.01.5L14.1 12 2.01 1.1zM4.78.46L17.7 8.02 14.6 11.06 4.78.46z" />
              </svg>
              <span className="store-txt">
                <span className="store-sub">Get it on</span>
                <span className="store-name">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="nav-brand-icon">
              <img src="/assets/logo.png" alt="" width={34} height={34} />
            </span>
            <span className="footer-brand-name">
              macro<span>va</span>
            </span>
          </div>
          <div className="footer-links">
            <a href="#download" data-store="auto">
              Download
            </a>
            <a href="/privacy/">Privacy Policy</a>
            <a href="/support/">Support</a>
            <a
              href="https://www.instagram.com/macrova_ai"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="footer-copy">© 2026 Macrova. All rights reserved.</p>
      </footer>
    </>
  );
}
