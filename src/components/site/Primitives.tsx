import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Overline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`overline ${className}`}>{children}</span>;
}

export function SectionHeading({
  overline,
  children,
  rule = true,
  align = "left",
  className = "",
}: {
  overline?: ReactNode;
  children: ReactNode;
  rule?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {overline && <Overline className={align === "center" ? "justify-center" : ""}>{overline}</Overline>}
      <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold leading-[1.1] text-ink mt-5 tracking-tight">
        {children}
      </h2>
      {rule && <div className={`rule-maroon mt-5 ${align === "center" ? "mx-auto" : ""}`} />}
    </div>
  );
}
