import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";
import data from "@/data/placements.json";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MAROON = "#7B1818";
const COLORS = ["#7B1818", "#A93030", "#C9504D", "#8a4a3d", "#5e1a1a", "#d97a6c"];

function AnimatedNum({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-border shadow-lg px-3 py-2 text-[12px]">
      {label && <div className="font-semibold text-ink mb-1">{label}</div>}
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5" style={{ background: p.color || p.fill }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-semibold text-ink">{p.value}{p.unit ?? ""}</span>
        </div>
      ))}
    </div>
  );
};

export function PlacementCharts() {
  return (
    <div className="space-y-16">
      {/* HERO STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
        {[
          { label: "Highest CTC", value: data.summary.highestCTC, suffix: " LPA", decimals: 1 },
          { label: "Average CTC", value: data.summary.averageCTC, suffix: " LPA", decimals: 2 },
          { label: "Median CTC", value: data.summary.medianCTC, suffix: " LPA", decimals: 2 },
          { label: "Placement Rate", value: data.summary.placementRate, suffix: "%", decimals: 0 },
        ].map((s) => (
          <div key={s.label} className="bg-white p-7 md:p-9 text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-maroon leading-none">
              <AnimatedNum value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <div className="text-[11px] uppercase tracking-[2px] text-muted-foreground mt-3">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* DONUT — Final Placement Sectors */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white border border-border p-8">
          <div className="overline mb-2">Final Placements 2025</div>
          <h3 className="font-display text-2xl font-bold mb-6">Sector Distribution</h3>
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={data.finalPlacementSectors}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={130}
                paddingAngle={2}
                dataKey="value"
                animationDuration={1200}
              >
                {data.finalPlacementSectors.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} formatter={(v: any) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4 text-[12px]">
            {data.finalPlacementSectors.map((s, i) => (
              <div key={s.name} className="flex items-center gap-2">
                <span className="w-3 h-3" style={{ background: COLORS[i % COLORS.length] }} />
                <span className="text-ink-2">{s.name}</span>
                <span className="ml-auto font-semibold text-maroon">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* RADAR — Function strength */}
        <div className="bg-white border border-border p-8">
          <div className="overline mb-2">Domain Strength</div>
          <h3 className="font-display text-2xl font-bold mb-6">Functional Footprint</h3>
          <ResponsiveContainer width="100%" height={380}>
            <RadarChart data={data.functionRadar}>
              <PolarGrid stroke="#E0D8D8" />
              <PolarAngleAxis dataKey="function" tick={{ fill: "#3d3d3d", fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#7a7a7a", fontSize: 10 }} />
              <Radar
                name="Placement Strength"
                dataKey="value"
                stroke={MAROON}
                fill={MAROON}
                fillOpacity={0.4}
                animationDuration={1400}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CTC TREND LINE */}
      <div className="bg-white border border-border p-8">
        <div className="overline mb-2">Year-over-Year</div>
        <h3 className="font-display text-2xl font-bold mb-6">CTC Trend (LPA)</h3>
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={data.ctcTrend} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0D8D8" />
            <XAxis dataKey="year" tick={{ fill: "#3d3d3d", fontSize: 12 }} />
            <YAxis tick={{ fill: "#7a7a7a", fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="highest" stroke={MAROON} strokeWidth={2.5} dot={{ r: 5 }} animationDuration={1400} />
            <Line type="monotone" dataKey="median" stroke="#A93030" strokeWidth={2.5} dot={{ r: 5 }} animationDuration={1400} />
            <Line type="monotone" dataKey="average" stroke="#C9504D" strokeWidth={2.5} dot={{ r: 5 }} animationDuration={1400} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* BACKGROUND BARS */}
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white border border-border p-8">
          <div className="overline mb-2">Batch 2024–26</div>
          <h3 className="font-display text-2xl font-bold mb-6">Academic Background</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.academicBackground} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0D8D8" horizontal={false} />
              <XAxis type="number" tick={{ fill: "#7a7a7a", fontSize: 11 }} />
              <YAxis type="category" dataKey="name" tick={{ fill: "#3d3d3d", fontSize: 12 }} width={140} />
              <Tooltip content={<CustomTooltip />} formatter={(v: any) => `${v}%`} />
              <Bar dataKey="value" fill={MAROON} animationDuration={1200} radius={[0, 2, 2, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white border border-border p-8">
          <div className="overline mb-2">Pre-MBA</div>
          <h3 className="font-display text-2xl font-bold mb-6">Professional Background</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.professionalBackground} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0D8D8" horizontal={false} />
              <XAxis type="number" tick={{ fill: "#7a7a7a", fontSize: 11 }} />
              <YAxis type="category" dataKey="name" tick={{ fill: "#3d3d3d", fontSize: 12 }} width={120} />
              <Tooltip content={<CustomTooltip />} formatter={(v: any) => `${v}%`} />
              <Bar dataKey="value" fill="#A93030" animationDuration={1200} radius={[0, 2, 2, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SUMMER */}
      <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
        <div className="bg-maroon text-white p-8 lg:col-span-1 flex flex-col justify-between">
          <div>
            <div className="overline !text-white/60 mb-2">Summer Internship 2025</div>
            <h3 className="font-display text-2xl font-bold mb-6">Stipends (₹)</h3>
          </div>
          <div className="space-y-5">
            {[
              { l: "Highest", v: data.summerStipend.highest },
              { l: "Average", v: data.summerStipend.average },
              { l: "Median", v: data.summerStipend.median },
            ].map((s) => (
              <div key={s.l} className="border-t border-white/15 pt-3">
                <div className="text-[10px] uppercase tracking-[2px] text-white/60">{s.l}</div>
                <div className="font-display text-3xl font-bold mt-1">
                  ₹<AnimatedNum value={s.v} />
                </div>
              </div>
            ))}
            <div className="text-[11px] text-white/50 pt-2">*Stipend for the entire internship period</div>
          </div>
        </div>
        <div className="bg-white p-8 lg:col-span-2">
          <div className="overline mb-2">Summer Internship</div>
          <h3 className="font-display text-2xl font-bold mb-6">Sector Split</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.summerInternshipSectors}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0D8D8" />
              <XAxis dataKey="name" tick={{ fill: "#3d3d3d", fontSize: 11 }} angle={-15} textAnchor="end" height={60} />
              <YAxis tick={{ fill: "#7a7a7a", fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} formatter={(v: any) => `${v}%`} />
              <Bar dataKey="value" fill={MAROON} animationDuration={1200} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export function RecruiterMarquee() {
  const items = [...data.topRecruiters, ...data.topRecruiters];
  return (
    <div className="overflow-hidden border-t border-b border-border bg-white py-5">
      <div className="flex w-max marquee-anim">
        {items.map((r, i) => (
          <span
            key={i}
            className="px-9 font-display font-semibold text-[15px] text-maroon whitespace-nowrap border-r border-border"
          >
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}

export function RolesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
      {Object.entries(data.rolesByDomain).map(([domain, roles]) => (
        <div key={domain} className="bg-white p-6">
          <div className="font-display text-lg font-bold text-maroon mb-3 pb-3 border-b border-border">
            {domain}
          </div>
          <ul className="space-y-1.5 text-[13px] text-ink-2">
            {roles.map((r) => (
              <li key={r}>· {r}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
