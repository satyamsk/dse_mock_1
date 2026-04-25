import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticker } from "@/components/site/Ticker";
import { Reveal, Overline, SectionHeading } from "@/components/site/Primitives";
import { Btn } from "@/components/site/Btn";
import { RecruiterMarquee } from "@/components/site/PlacementCharts";
import { MapEmbed } from "@/components/site/MapEmbed";
import { SITE } from "@/lib/site-config";
import { ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/")({
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

const HERO_PHOTO =
  "https://static.wixstatic.com/media/7fc140_a6889de2e80a47669b0a4e06e67106e9~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85/7fc140_a6889de2e80a47669b0a4e06e67106e9~mv2.jpg";

const WHY = [
  { icon: "🌐", title: "Global Curriculum", body: "International trade, finance, strategy, and cross-border management — built for the world stage, rooted in academic rigour." },
  { icon: "🏆", title: "Unmatched Placements", body: "100% placement record. Consulting, FMCG, finance, and global MNCs recruit from our campus year after year." },
  { icon: "🏛️", title: "The DSE Advantage", body: "Backed by Delhi School of Economics — 57+ years of academic excellence and India's most respected commerce faculty." },
  { icon: "🤝", title: "A Network That Lasts", body: "A tight-knit community of future CEOs, consultants and changemakers. DSE alumni open doors all over the world." },
  { icon: "🎓", title: "Faculty of Distinction", body: "Learn from researchers, economists, and industry practitioners who bring real-world insight into every classroom." },
  { icon: "🎉", title: "Vibrant Campus Life", body: "Synergy, Erudition, Vimarsh, clubs and committees — life at MBA-IB is as energetic as the curriculum is rigorous." },
];

const ACHIEVEMENTS = [
  { medal: "🥇", title: "Brand Aficionado — Marketing Competition", host: "MarkAdZ · IIM Visakhapatnam", people: "Adarsh Jain, Nikhil Pundir & Shubhanshu Jaiswal", tag: "1st Position" },
  { medal: "🥈", title: "Prodigy — GTM Strategy Competition", host: "7 Lakes Fest · IIM Calcutta", people: "Yash Chouhan & Vriddhi Jaain", tag: "2nd Runner-Up" },
  { medal: "🥈", title: "ThinCovation 2025 — Product Management", host: "ThinC · MDI Gurgaon", people: "Vriddhi Jaain & Yash Chouhan", tag: "Runner-Up" },
  { medal: "🥈", title: "INCOG 2025 — Marketing Fest", host: "IIM Amritsar · 588 participants", people: "Vriddhi Jaain & Yash Chouhan", tag: "Runner-Up" },
  { medal: "🎙️", title: "Erudition 2025 — Annual Business Convention", host: "MBA-IB · Department of Commerce · DSE", people: "Panel discussions, industry leaders, breakthrough ideas.", tag: "Annual Convention" },
  { medal: "🧠", title: "Vimarsh — Strategy & Case Competition", host: "Open Competition via Unstop", people: "Strategy, analytics, and problem-solving — compete with the best.", tag: "Case Competition" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="grid lg:grid-cols-[52%_48%] min-h-[100svh] pt-20">
        <div className="bg-cream flex flex-col justify-center px-6 md:px-10 lg:pl-16 lg:pr-20 py-16 lg:py-24 relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-maroon-light text-maroon px-4 py-1.5 text-[11px] font-semibold tracking-[2px] uppercase border border-maroon/15 mb-7">
              ★ Admissions Open · Batch 2026–28
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-bold leading-[1.04] text-[clamp(40px,6vw,68px)] tracking-tight text-ink mb-6">
              Where India's Brightest <em className="text-maroon font-normal">Business Minds</em> Are Forged.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[17px] text-muted-foreground leading-[1.75] max-w-[480px] mb-10">
              The MBA (International Business) programme at the Department of Commerce, Delhi School of Economics — a community as much as it is a curriculum. Shaping global business leaders since 1967.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 mb-14">
              <Btn href={SITE.applicationPortal} variant="solid" external>
                Apply for 2026–28
              </Btn>
              <Btn to="/placements" variant="ghost">
                See Placements
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border pt-7 max-w-xl">
              {[
                { n: "1967", l: "Established" },
                { n: "100%", l: "Placement Record" },
                { n: "30 LPA", l: "Highest CTC" },
                { n: "60+", l: "Top Recruiters" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`px-4 first:pl-0 ${i < 3 ? "border-r border-border" : ""}`}
                >
                  <div className="font-display font-bold text-[28px] text-maroon leading-none">
                    {s.n}
                  </div>
                  <div className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground mt-2 leading-tight">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="relative hidden lg:block overflow-hidden">
          <img src={HERO_PHOTO} alt="Delhi School of Economics campus" className="w-full h-full object-cover" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
          <div className="absolute bottom-10 left-8 bg-cream/95 backdrop-blur border border-border p-5 max-w-[210px]">
            <div className="font-display font-bold text-[38px] text-maroon leading-none">57+</div>
            <div className="text-[11px] uppercase tracking-[1.5px] text-muted-foreground mt-1">
              Years of Academic Excellence
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ABOUT */}
      <section className="py-24 md:py-32" id="about">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <Overline>About Us</Overline>
            <h2 className="font-display text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-tight mt-6">
              Redefining<br />Commerce Education<br />Since 1967
            </h2>
            <div className="rule-maroon mt-6" />
            <div className="space-y-5 mt-8 text-[16.5px] text-ink-2/85 leading-[1.85]">
              <p>
                The Department of Commerce, Faculty of Commerce and Business, Delhi School of Economics traces its origins to December 1967. In over five decades, it has imbibed the DSE tradition of exploring new frontiers of knowledge — establishing itself as India's premier institution for Business and Commerce research.
              </p>
              <p>
                The MBA (International Business) programme prepares students to navigate global markets with rigour, vision, and a deep sense of purpose. It is a community as much as it is a curriculum.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {["📅 Est. 1967", "🏛️ University of Delhi", "🌐 International Business", "🎓 Faculty of Commerce & Business"].map((b) => (
                <span key={b} className="px-4 py-2 text-[12px] font-medium bg-white border border-border text-ink-2">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative pb-16">
            <div className="relative">
              <img src={HERO_PHOTO} alt="DSE" className="w-full h-[480px] object-cover" />
              <div className="absolute -bottom-3 -right-3 w-[60%] h-[60%] border-2 border-maroon -z-10" />
            </div>
            <div className="absolute -bottom-12 -left-6 bg-white border-t-[3px] border-maroon shadow-xl p-7 w-[280px] z-10">
              <div className="font-display font-bold text-[17px] text-maroon mb-4">Programme Snapshot</div>
              <div className="space-y-1">
                {[
                  ["Duration", "2 Years Full-Time"],
                  ["Batch", "2026–2028"],
                  ["Department", "Commerce, FCB"],
                  ["Institution", "Delhi School of Economics"],
                  ["University", "University of Delhi"],
                  ["Also Offered", "MBA (HRD), MBA (BA)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-baseline py-1.5 text-[12.5px] border-b border-border last:border-0">
                    <b className="font-semibold text-ink">{k}</b>
                    <span className="text-muted-foreground text-right max-w-[140px]">{v}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/programme-brochure"
                className="block w-full text-center mt-4 py-3 bg-maroon hover:bg-maroon-dark text-white text-[12.5px] font-semibold tracking-wider transition-colors"
              >
                Download Brochure →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <div className="bg-maroon py-20 relative overflow-hidden">
        <div className="absolute left-12 -top-6 font-display text-[280px] text-white/[0.04] leading-none pointer-events-none select-none">
          “
        </div>
        <Reveal>
          <div className="container-page relative">
            <p className="font-display italic text-[clamp(22px,3vw,34px)] leading-[1.5] text-white max-w-3xl mx-auto text-center">
              "In its history spanning over five decades, the Department of Commerce has redefined commerce education in India and produced leaders who shape global business."
              <span className="block mt-7 font-sans not-italic text-[12px] uppercase tracking-[3px] text-white/50">
                Department of Commerce · DSE · University of Delhi
              </span>
            </p>
          </div>
        </Reveal>
      </div>

      {/* WHY */}
      <section className="py-24 md:py-32 bg-[#F4EFEF]">
        <div className="container-page">
          <Reveal>
            <Overline>Why Choose Us</Overline>
            <h2 className="font-display text-[clamp(32px,4.5vw,46px)] font-bold leading-[1.1] tracking-tight mt-5">
              What Sets MBA-IB Apart
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 mt-16">
            {WHY.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 0.06}
                className={`grid grid-cols-[72px_1fr] gap-5 p-8 md:py-10 border-b border-border hover:bg-maroon-light transition-colors ${
                  i % 2 === 1 ? "md:border-l md:pl-10" : "md:pr-10"
                }`}
              >
                <div className="font-display font-bold text-[42px] text-maroon/15 leading-none -mt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[28px] mb-2">{w.icon}</div>
                  <div className="text-[17px] font-semibold text-ink mb-2">{w.title}</div>
                  <p className="text-[14.5px] text-ink-2/80 leading-[1.7]">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className="py-24 md:py-32" id="admissions">
        <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <Reveal>
            <Overline>Admissions 2026–28</Overline>
            <h2 className="font-display text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-tight mt-5">
              Your Journey<br />
              <em className="text-maroon font-normal">Begins Here.</em>
            </h2>
            <div className="rule-maroon mt-5" />
            <p className="text-[16px] text-ink-2/80 leading-[1.75] mt-6">
              Applications are open for the MBA (International Business) Batch 2026–2028. Shortlisted candidates for GDPI have been announced.
            </p>
            <div className="grid grid-cols-2 border border-border mt-10">
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
                  className={`p-5 border-border ${i % 2 === 1 ? "border-l" : ""} ${i < 4 ? "border-b" : ""}`}
                >
                  <div className="text-[10px] uppercase tracking-[2px] text-muted-foreground font-semibold">{k}</div>
                  <div className="text-[14px] font-medium text-ink mt-1">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bg-maroon text-white p-8 mb-7">
              <div className="text-[10px] uppercase tracking-[3px] opacity-70 mb-3">Currently Accepting</div>
              <div className="font-display text-2xl font-bold leading-tight mb-3">
                MBA-IB Batch<br />2026 – 2028
              </div>
              <p className="text-[14px] opacity-85 leading-[1.65] mb-6">
                Applications are live. Shortlisted candidates for the Group Discussion and Personal Interview round have been announced.
              </p>
              <a
                href={SITE.applicationPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-maroon hover:bg-cream py-3.5 text-[13px] font-semibold tracking-wide transition-colors"
              >
                Apply on Official Portal →
              </a>
            </div>
            <div className="space-y-2">
              {[
                { label: "GDPI Notice", note: "PDF →", href: "https://www.dsembaib.in/_files/ugd/7fc140_c989e7f0e13440d38fbca1e9b8dd5607.pdf" },
                { label: "Shortlisted Candidates 2026–28", note: "PDF →", href: "https://www.dsembaib.in/_files/ugd/7fc140_b6c4a80180fa4818b8b82978e71f8eb0.pdf" },
                { label: "Admission Brochure 2026–27", note: "PDF →", href: "https://www.dsembaib.in/_files/ugd/7fc140_18f03df4702b4f5aa41ee9677f98c7f8.pdf" },
                { label: "FAQs — MBA Admissions", note: "Page →", href: "/faqs" },
                { label: "Department Notices", note: "commerce.du.ac.in →", href: "https://commerce.du.ac.in" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-3.5 px-5 bg-white border border-border text-maroon font-medium text-[13.5px] hover:bg-maroon hover:text-white hover:border-maroon transition-colors"
                >
                  <span>{l.label}</span>
                  <span className="text-[11px] uppercase tracking-[1px] opacity-60">{l.note}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLACEMENTS */}
      <section className="py-24 md:py-32 bg-[#F4EFEF]" id="placements">
        <div className="container-page">
          <div className="grid md:grid-cols-[1fr_auto] items-end gap-10 mb-12">
            <Reveal>
              <Overline>Placements</Overline>
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-tight mt-5">
                Our Students.<br />The World's <em className="text-maroon font-normal">Boardrooms.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[15.5px] text-muted-foreground max-w-[340px] leading-[1.7]">
                Year after year, MBA-IB students secure positions at the country's and world's most respected organisations — consulting, finance, FMCG, tech, and more.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <RecruiterMarquee />
          </Reveal>
          <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-7 mt-12">
            {[
              { y: "2025", desc: "Complete placement data for the 2024–2026 batch.", href: "https://www.dsembaib.in/_files/ugd/7fc140_c903ffe84abb4aabacf506eb27862ec0.pdf", img: "https://static.wixstatic.com/media/7fc140_32d52113c72244008c1c5bdb290036f0~mv2.png" },
              { y: "2024", desc: "Full placement data for the 2024 graduating batch.", href: "https://www.dsembaib.in/_files/ugd/7fc140_ab71de2dabba400ba01f5f384124d0d5.pdf" },
            ].map((r, i) => (
              <Reveal key={r.y} delay={i * 0.1}>
                <div className="bg-white border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                  {r.img ? (
                    <img src={r.img} alt={`Placement Report ${r.y}`} className="w-full h-[200px] object-cover object-top" />
                  ) : (
                    <div className="w-full h-[200px] bg-maroon-dark flex items-center justify-center font-display text-[42px] text-white/20 font-bold">
                      {r.y}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2">Placement Report {r.y}</h3>
                    <p className="text-[14px] text-muted-foreground mb-5">{r.desc}</p>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white px-5 py-2.5 text-[13px] font-medium transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download PDF
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="bg-maroon text-white p-9 flex flex-col justify-between h-full">
                <h3 className="font-display text-[17px] font-semibold opacity-80 mb-7">Placement Track Record</h3>
                <div>
                  <div className="font-display text-[72px] font-bold leading-none mb-2">100%</div>
                  <div className="text-[12px] uppercase tracking-[2px] opacity-60">Consistent Placement Record</div>
                </div>
                <Link to="/placements" className="mt-6 text-[13px] inline-flex items-center gap-2 hover:gap-3 transition-all opacity-90">
                  Explore full report <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <Overline>Achievements</Overline>
            <h2 className="font-display text-[clamp(32px,4.5vw,46px)] font-bold leading-[1.1] tracking-tight mt-5 mb-3">
              Competing at India's Finest.<br /><em className="text-maroon font-normal">Winning.</em>
            </h2>
            <p className="text-[15.5px] text-muted-foreground max-w-lg mt-3">
              Our students consistently reach the podium at competitions hosted by IIMs, MDI, and other top institutions.
            </p>
          </Reveal>
          <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0 mt-12 pb-5">
            <div className="flex gap-5 min-w-max">
              {ACHIEVEMENTS.map((a, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="w-[300px] bg-white border border-border border-t-[3px] border-t-maroon p-7 hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                    <div className="text-[26px] mb-3">{a.medal}</div>
                    <div className="font-display text-[18px] font-bold leading-tight text-ink mb-2">{a.title}</div>
                    <div className="text-[12px] font-semibold text-maroon uppercase tracking-wider mb-4">{a.host}</div>
                    <div className="text-[14px] text-ink-2 leading-[1.6] mb-4">{a.people}</div>
                    <div className="text-[10px] uppercase tracking-[2px] text-muted-foreground pt-3 border-t border-border">
                      {a.tag} · MBA-IB · DOC · DSE
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <p className="text-center text-[11px] uppercase tracking-[2px] text-muted-foreground mt-4">
            ← Scroll to see more achievements →
          </p>
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section className="bg-footer text-white py-24 md:py-32">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <Overline className="!text-white/70 [&::before]:!bg-white/40">Campus Life</Overline>
            <h2 className="font-display text-[clamp(32px,5vw,52px)] font-bold leading-[1.1] tracking-tight mt-6">
              Life at MBA-IB Is <em className="text-maroon-mid font-normal">Never Dull.</em>
            </h2>
            <p className="text-[16px] text-white/70 leading-[1.8] mt-6 max-w-lg">
              From flagship business conventions like Erudition and the inter-college fest Synergy, to TEDx Talks, sports tournaments, and a thriving network of student-run cells — MBA-IB life is as energetic as the curriculum is rigorous.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Btn to="/student-body" variant="white">Meet the Student Body</Btn>
              <Btn to="/upcoming-events" variant="white">Upcoming Events</Btn>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
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
                  className="bg-white/[0.04] hover:bg-maroon border border-white/10 hover:border-maroon p-5 transition-colors group"
                >
                  <div className="font-display text-xl font-bold text-white">{c.t}</div>
                  <div className="text-[12px] text-white/60 group-hover:text-white/85 mt-1">{c.s}</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section className="py-24 md:py-32" id="contact">
        <div className="container-page">
          <Reveal>
            <SectionHeading overline="Visit Us" align="center">
              Find Us at <em className="text-maroon font-normal">Delhi School of Economics</em>
            </SectionHeading>
          </Reveal>
          <div className="mt-14">
            <Reveal>
              <MapEmbed />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
