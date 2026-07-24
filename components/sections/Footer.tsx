import theme from "@/config/theme";
import { Logo } from "@/components/ui/Logo";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Icon } from "@/components/ui/Icon";

/** Footer — columns, socials, store badges, gradient rule. */
export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-soft">
      {/* thin gradient rule */}
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
              {theme.footer.blurb}
            </p>
            <div className="mt-5 flex gap-3">
              {theme.brand.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {theme.footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-[13px] font-bold uppercase tracking-wider text-faint">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[14px] text-muted transition-colors hover:text-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <StoreBadges className="mb-6" />
          <div className="flex flex-col justify-between gap-2 text-[13px] text-faint sm:flex-row">
            <p>{theme.footer.copyright}</p>
            <p>{theme.footer.credit}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
