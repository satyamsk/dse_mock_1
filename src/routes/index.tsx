import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticker } from "@/components/site/Ticker";
import { Reveal, Overline, SectionHeading } from "@/components/site/Primitives";
import { Btn } from "@/components/site/Btn";
import { RecruiterMarquee } from "@/components/site/PlacementCharts";
import { MapEmbed } from "@/components/site/MapEmbed";
import { SITE, PHOTOS } from "@/lib/site-config";
import { ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/")(
  {
  head: () => ({
    meta: [
      { title: "MBA (International Business) — Delhi School of Economics" },
      {
        name: "description",
        content:
          "MBA (International Business) — flagship two-year programme at the Department of Commerce, Delhi School of Economics. Admissions open for Batch 2026–28.",
      },
      { property: "og:title", content: "MBA (International Business) — Delhi School of Economics" },
      {
        property: "og:description",
        content: "Shaping global business leaders since 1967. 100% placements. Top recruiters every year.",
      },
    ],
  }),
  component: Home,
});

const WHY = [
  { title: "Global Curriculum", body: "International trade, finance, strategy, and cross-border management — built for the world stage, rooted in academic rigour." },
  { title: "Unmatched Placements", body: "100% placement record. Consulting, FMCG, finance, and global MNCs recruit from our campus year after year." },
  { title: "The DSE Advantage", body: "Backed by Delhi School of Economics — 57+ years of academic excellence and India's most respected commerce faculty." },
  { title: "A Network That Lasts", body: "A tight-knit community of future CEOs, consultants and changemakers. DSE alumni open doors across the world." },
];

function Home() {
  return (
    <div>
      {/* ─── HERO — Full-bleed batch photo background ─── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={PHOTOS.batchGroup}
          alt="MBA-IB Batch — Delhi School of Economics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay — dark left for readability, transparent right to show photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
        {/* Bottom vignette for stats bar */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="container-page relative z-10 pt-28 pb-32 lg:max-w-[55%]">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold tracking-[2px] uppercase border border-white/20 mb-6">
              Admissions Open · Batch 2026–28
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-bold leading-[1.06] text-[clamp(38px,5.5vw,64px)] tracking-tight text-white mb-5">
              Where India's Brightest{" "}
              <span className="text-maroon-mid">Business Minds</span>{" "}
              Are Forged.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[16px] text-white/75 leading-[1.75] max-w-[480px] mb-8">
              A two-year full-time MBA programme at the Department of Commerce, Delhi School of Economics — shaping global business leaders since 1967.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-0">
              <Btn href={SITE.applicationPortal} variant="solid" external>
                Apply for 2026–28
              </Btn>
              <Btn to="/placements" variant="white">
                See Placements
              </Btn>
            </div>
          </Reveal>
        </div>

        {/* Stats bar pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container-page">
            <Reveal delay={0.12}>
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/20 py-6 max-w-2xl">
                {[
                  { n: "1967", l: "Established" },
                  { n: "100%", l: "Placement Record" },
                  { n: "30 LPA", l: "Highest CTC" },
                  { n: "60+", l: "Top Recruiters" },
                ].map((s, i) => (
                  <div
                    key={s.l}
                    className={`px-4 first:pl-0 ${i < 3 ? "border-r border-white/20" : ""}`}
                  >
                    <div className="font-display font-bold text-[26px] text-white leading-none">
                      {s.n}
                    </div>
                    <div className="text-[10px] uppercase tracking-[1.5px] text-white/50 mt-1.5 leading-tight">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ─── ABOUT ─── */}
      <section className="py-16 md:py-20" id="about">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <Overline>About Us</Overline>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-tight mt-5">
              Redefining Commerce Education Since 1967
            </h2>
            <div className="rule-maroon mt-5" />
            <div className="space-y-4 mt-6 text-[15.5px] text-ink-2/85 leading-[1.8]">
              <p>
                The Department of Commerce, Faculty of Commerce and Business, Delhi School of Economics traces its origins to December 1967. In over five decades, it has imbibed the DSE tradition of exploring new frontiers of knowledge — establishing itself as India's premier institution for Business and Commerce research.
              </p>
              <p>
                The MBA (International Business) programme prepares students to navigate global markets with rigour, vision, and a deep sense of purpose.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Est. 1967", "University of Delhi", "International Business", "Faculty of Commerce & Business"].map((b) => (
                <span key={b} className="px-3.5 py-1.5 text-[11.5px] font-medium bg-white border border-border text-ink-2">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative pb-14">
            <div className="relative">
              <img src={PHOTOS.campus} alt="DSE Campus" className="w-full h-[420px] object-cover" />
              <div className="absolute -bottom-3 -right-3 w-[60%] h-[60%] border-2 border-maroon -z-10" />
            </div>
            <div className="absolute -bottom-10 -left-6 bg-white border-t-[3px] border-maroon shadow-xl p-6 w-[270px] z-10">
              <div className="font-display font-bold text-[16px] text-maroon mb-3">Programme Snapshot</div>
              <div className="space-y-1">
                {[
                  ["Duration", "2 Years Full-Time"],
                  ["Batch", "2026–2028"],
                  ["Department", "Commerce, FCB"],
                  ["Institution", "Delhi School of Economics"],
                  ["University", "University of Delhi"],
                  ["Also Offered", "MBA (HRD), MBA (BA)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-baseline py-1.5 text-[12px] border-b border-border last:border-0">
                    <b className="font-semibold text-ink">{k}</b>
                    <span className="text-muted-foreground text-right max-w-[130px]">{v}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/programme-brochure"
                className="block w-full text-center mt-3 py-2.5 bg-maroon hover:bg-maroon-dark text-white text-[12px] font-semibold tracking-wider transition-colors"
              >
                Download Brochure →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-16 md:py-20 bg-[#F4EFEF]">
        <div className="container-page">
          <Reveal>
            <Overline>Why Choose Us</Overline>
            <h2 className="font-display text-[clamp(30px,4vw,42px)] font-bold leading-[1.1] tracking-tight mt-4">
              What Sets MBA-IB Apart
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border mt-10">
            {WHY.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 0.04}
                className="bg-cream p-7 md:p-9 hover:bg-maroon-light transition-colors"
              >
                <div className="text-[16px] font-semibold text-ink mb-2">{w.title}</div>
                <p className="text-[14px] text-ink-2/80 leading-[1.7]">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADMISSIONS ─── */}
      <section className="py-16 md:py-20" id="admissions">
        <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <Reveal>
            <Overline>Admissions 2026–28</Overline>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-tight mt-4">
              Your Journey{" "}
              <span className="text-maroon">Begins Here.</span>
            </h2>
            <div className="rule-maroon mt-4" />
            <p className="text-[15px] text-ink-2/80 leading-[1.75] mt-5">
              Applications are open for the MBA (International Business) Batch 2026–2028. Shortlisted candidates for GDPI have been announced.
            </p>
            <div className="grid grid-cols-2 border border-border mt-8">
              {[
                ["Programme", "MBA (International Business)"],
                ["Batch", "2026 – 2028"],
                ["Eligibility", "Graduates with valid CAT Score"],
                ["Location", "Delhi School of Economics, DU"],
                ["Application Portal", "mbaadmission.uod.ac.in"],
                ["Current Status", "Shortlisted Announced"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`p-4 border-border ${i % 2 === 1 ? "border-l" : ""} ${i < 4 ? "border-b" : ""}`}
                >
                  <div className="text-[10px] uppercase tracking-[2px] text-muted-foreground font-semibold">{k}</div>
                  <div className="text-[13.5px] font-medium text-ink mt-1">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-maroon text-white p-7 mb-5">
              <div className="text-[10px] uppercase tracking-[3px] opacity-70 mb-2">Currently Accepting</div>
              <div className="font-display text-xl font-bold leading-tight mb-2">
                MBA-IB Batch 2026 – 2028
              </div>
              <p className="text-[13.5px] opacity-85 leading-[1.65] mb-5">
                Applications are live. Shortlisted candidates for the Group Discussion and Personal Interview round have been announced.
              </p>
              <a
                href={SITE.applicationPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-maroon hover:bg-cream py-3 text-[13px] font-semibold tracking-wide transition-colors"
              >
                Apply on Official Portal →
              </a>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "GDPI Notice", note: "PDF", href: "https://www.dsembaib.in/_files/ugd/7fc140_c989e7f0e13440d38fbca1e9b8dd5607.pdf" },
                { label: "Shortlisted Candidates 2026–28", note: "PDF", href: "https://www.dsembaib.in/_files/ugd/7fc140_b6c4a80180fa4818b8b82978e71f8eb0.pdf" },
                { label: "Admission Brochure 2026–27", note: "PDF", href: "https://www.dsembaib.in/_files/ugd/7fc140_18f03df4702b4f5aa41ee9677f98c7f8.pdf" },
                { label: "FAQs — MBA Admissions", note: "Page", href: "/faqs" },
                { label: "Department Notices", note: "External", href: "https://commerce.du.ac.in" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-3 px-4 bg-white border border-border text-maroon font-medium text-[13px] hover:bg-maroon hover:text-white hover:border-maroon transition-colors"
                >
                  <span>{l.label}</span>
                  <span className="text-[10px] uppercase tracking-[1px] opacity-60">{l.note} →</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PLACEMENTS ─── */}
      <section className="py-16 md:py-20 bg-[#F4EFEF]" id="placements">
        <div className="container-page">
          <div className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-10">
            <Reveal>
              <Overline>Placements</Overline>
              <h2 className="font-display text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-tight mt-4">
                Our Students.{" "}
                <span className="text-maroon">The World's Boardrooms.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-[15px] text-muted-foreground max-w-[340px] leading-[1.7]">
                Year after year, MBA-IB students secure positions at the country's and world's most respected organisations.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <RecruiterMarquee />
          </Reveal>
          <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-6 mt-10">
            {[
              { y: "2025", desc: "Complete placement data for the 2024–2026 batch.", href: "https://www.dsembaib.in/_files/ugd/7fc140_c903ffe84abb4aabacf506eb27862ec0.pdf", img: "https://static.wixstatic.com/media/7fc140_32d52113c72244008c1c5bdb290036f0~mv2.png" },
              { y: "2024", desc: "Full placement data for the 2024 graduating batch.", href: "https://www.dsembaib.in/_files/ugd/7fc140_ab71de2dabba400ba01f5f384124d0d5.pdf" },
            ].map((r, i) => (
              <Reveal key={r.y} delay={i * 0.06}>
                <div className="bg-white border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                  {r.img ? (
                    <img src={r.img} alt={`Placement Report ${r.y}`} className="w-full h-[180px] object-cover object-top" />
                  ) : (
                    <div className="w-full h-[180px] bg-maroon-dark flex items-center justify-center font-display text-[42px] text-white/20 font-bold">
                      {r.y}
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold mb-1.5">Placement Report {r.y}</h3>
                    <p className="text-[13.5px] text-muted-foreground mb-4">{r.desc}</p>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white px-4 py-2 text-[12.5px] font-medium transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <div className="bg-maroon text-white p-7 flex flex-col justify-between h-full">
                <h3 className="font-display text-[15px] font-semibold opacity-80 mb-5">Placement Track Record</h3>
                <div>
                  <div className="font-display text-[64px] font-bold leading-none mb-1.5">100%</div>
                  <div className="text-[11px] uppercase tracking-[2px] opacity-60">Consistent Placement Record</div>
                </div>
                <Link to="/placements" className="mt-5 text-[12.5px] inline-flex items-center gap-2 hover:gap-3 transition-all opacity-90">
                  Explore full report <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CAMPUS LIFE ─── */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        {/* Real event photo as background */}
        <img
          src={PHOTOS.erudition}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

        <div className="container-page relative z-10 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Overline className="!text-white/70 [&::before]:!bg-white/40">Campus Life</Overline>
            <h2 className="font-display text-[clamp(30px,4.5vw,46px)] font-bold leading-[1.1] tracking-tight mt-5">
              Life at MBA-IB Is{" "}
              <span className="text-maroon-mid">Never Dull.</span>
            </h2>
            <p className="text-[15px] text-white/70 leading-[1.8] mt-5 max-w-lg">
              From flagship conventions like Erudition and the inter-college fest Synergy, to TEDx Talks and student-run cells — MBA-IB life is as energetic as the curriculum is rigorous.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Btn to="/student-body" variant="white">Meet the Student Body</Btn>
              <Btn to="/upcoming-events" variant="white">Upcoming Events</Btn>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "Synergy", s: "Annual B-School Fest", h: "/synergy" },
                { t: "Erudition", s: "Business Convention", h: "/erudition" },
                { t: "TEDx", s: "Independent Talks", h: "/tedx" },
                { t: "Symposia", s: "Knowledge Series", h: "/symposia" },
                { t: "Disco", s: "Discussion Club", h: "/disco" },
                { t: "Ravenbrain", s: "Quiz & Trivia", h: "/ravenbrain" },
              ].map((c) => (
                <Link
                  key={c.t}
                  to={c.h}
                  className="bg-white/[0.06] hover:bg-maroon/80 border border-white/10 hover:border-maroon p-4 transition-colors group backdrop-blur-sm"
                >
                  <div className="font-display text-lg font-bold text-white">{c.t}</div>
                  <div className="text-[11.5px] text-white/60 group-hover:text-white/85 mt-0.5">{c.s}</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT + MAP ─── */}
      <section className="py-16 md:py-20" id="contact">
        <div className="container-page">
          <Reveal>
            <SectionHeading overline="Visit Us" align="center">
              Find Us at <span className="text-maroon">Delhi School of Economics</span>
            </SectionHeading>
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <MapEmbed />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
