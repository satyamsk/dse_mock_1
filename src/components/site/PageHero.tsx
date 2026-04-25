import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Overline, Reveal } from "./Primitives";

export function PageHero({
  overline,
  title,
  italic,
  subtitle,
  breadcrumb,
  bgImage,
}: {
  overline: string;
  title: ReactNode;
  italic?: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  bgImage?: string;
}) {
  const hasBg = !!bgImage;

  return (
    <section
      className={`pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden ${hasBg ? "text-white" : "bg-cream"}`}
    >
      {/* Optional background image with overlay */}
      {hasBg && (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </>
      )}

      {!hasBg && (
        <>
          <div className="absolute top-0 right-0 w-[40%] h-[1px] bg-border" />
          <div className="absolute top-0 right-0 w-[1px] h-[200px] bg-border" />
        </>
      )}

      <div className="container-page relative">
        {breadcrumb && (
          <Reveal>
            <nav
              className={`flex items-center gap-2 text-[12px] mb-6 uppercase tracking-[2px] ${hasBg ? "text-white/60" : "text-muted-foreground"}`}
            >
              <Link to="/" className={hasBg ? "hover:text-white" : "hover:text-maroon"}>
                Home
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className={hasBg ? "text-white/30" : "text-border"}>/</span>
                  {b.href ? (
                    <Link to={b.href} className={hasBg ? "hover:text-white" : "hover:text-maroon"}>
                      {b.label}
                    </Link>
                  ) : (
                    <span className={`font-semibold ${hasBg ? "text-white" : "text-maroon"}`}>
                      {b.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <Overline className={hasBg ? "!text-white/70 [&::before]:!bg-white/40" : undefined}>
            {overline}
          </Overline>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className={`font-display text-[clamp(36px,6vw,72px)] font-bold leading-[1.05] mt-6 tracking-tight max-w-4xl ${hasBg ? "text-white" : "text-ink"}`}
          >
            {title}
            {italic && (
              <>
                {" "}
                <span className={hasBg ? "text-maroon-mid" : "text-maroon"}>{italic}</span>
              </>
            )}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.15}>
            <p
              className={`text-[17px] max-w-2xl mt-6 leading-[1.75] ${hasBg ? "text-white/70" : "text-muted-foreground"}`}
            >
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className={`mt-8 w-12 h-0.5 ${hasBg ? "bg-white/40" : "bg-maroon"}`} />
        </Reveal>
      </div>
    </section>
  );
}
