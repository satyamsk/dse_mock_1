import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Overline, Reveal } from "./Primitives";

export function PageHero({
  overline,
  title,
  italic,
  subtitle,
  breadcrumb,
}: {
  overline: string;
  title: ReactNode;
  italic?: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[1px] bg-border" />
      <div className="absolute top-0 right-0 w-[1px] h-[200px] bg-border" />
      <div className="container-page relative">
        {breadcrumb && (
          <Reveal>
            <nav className="flex items-center gap-2 text-[12px] text-muted-foreground mb-6 uppercase tracking-[2px]">
              <Link to="/" className="hover:text-maroon">
                Home
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-border">/</span>
                  {b.href ? (
                    <Link to={b.href} className="hover:text-maroon">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-maroon font-semibold">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <Overline>{overline}</Overline>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-[clamp(36px,6vw,72px)] font-bold leading-[1.05] text-ink mt-6 tracking-tight max-w-4xl">
            {title}
            {italic && (
              <>
                {" "}
                <span className="text-maroon">{italic}</span>
              </>
            )}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.15}>
            <p className="text-[17px] text-muted-foreground max-w-2xl mt-6 leading-[1.75]">{subtitle}</p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className="rule-maroon mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
