import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Btn({
  to,
  href,
  variant = "solid",
  children,
  className = "",
  external,
}: {
  to?: string;
  href?: string;
  variant?: "solid" | "ghost" | "white";
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const styles = {
    solid:
      "bg-maroon hover:bg-maroon-dark text-white border border-maroon hover:shadow-[0_8px_24px_rgba(139,26,26,0.25)] hover:-translate-y-px",
    ghost: "bg-transparent text-maroon border border-maroon hover:bg-maroon hover:text-white",
    white: "bg-white text-maroon border border-white hover:bg-maroon hover:text-white hover:border-maroon",
  } as const;
  const base = `inline-flex items-center gap-2 px-7 py-3.5 text-[13.5px] font-medium tracking-wide transition-all ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={base}>
        {children}
        <ArrowRight className="w-4 h-4" />
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={base}>
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
