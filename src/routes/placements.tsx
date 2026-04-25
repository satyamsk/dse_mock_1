import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PlacementCharts, RecruiterMarquee, RolesGrid } from "@/components/site/PlacementCharts";
import { Reveal, Overline, SectionHeading } from "@/components/site/Primitives";
import { Btn } from "@/components/site/Btn";
import { Download, Award } from "lucide-react";
import { PHOTOS } from "@/lib/site-config";
import data from "@/data/placements.json";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements — MBA-IB · Delhi School of Economics" },
      {
        name: "description",
        content:
          "100% placement record. Highest CTC ₹30 LPA. Top recruiters from consulting, finance, FMCG, and global MNCs. Explore the full MBA-IB placement report.",
      },
      { property: "og:title", content: "Placements — MBA-IB DSE" },
      {
        property: "og:description",
        content: "100% placements · ₹30 LPA highest · 60+ top recruiters · Consulting, Finance, FMCG, Tech.",
      },
    ],
  }),
  component: Placements,
});

function Placements() {
  return (
    <>
      <PageHero
        overline="Placements"
        title="Our Students."
        italic="The World's Boardrooms."
        subtitle="Year after year, MBA-IB students secure positions at the country's and world's most respected organisations — consulting, finance, FMCG, tech, and more."
        breadcrumb={[{ label: "Placements" }]}
        bgImage={PHOTOS.department}
      />

      <section className="py-16">
        <div className="container-page space-y-16">
          <Reveal>
            <SectionHeading overline="Class of 2025">
              Final Placement <span className="text-maroon">Highlights</span>
            </SectionHeading>
          </Reveal>

          <Reveal>
            <PlacementCharts />
          </Reveal>

          <Reveal>
            <SectionHeading overline="Recruiters">
              Brands That Hire from <span className="text-maroon">DSE MBA-IB</span>
            </SectionHeading>
            <p className="text-[15px] text-muted-foreground mt-5 max-w-xl">
              A snapshot of the {data.summary.totalRecruiters}+ organisations that have recruited from MBA-IB across recent batches.
            </p>
          </Reveal>
          <Reveal>
            <RecruiterMarquee />
          </Reveal>

          <Reveal>
            <SectionHeading overline="Roles">
              What Our Students <span className="text-maroon">Do.</span>
            </SectionHeading>
          </Reveal>
          <Reveal>
            <RolesGrid />
          </Reveal>
        </div>
      </section>

      {/* REPORTS */}
      <section className="py-20 bg-[#F4EFEF]">
        <div className="container-page">
          <Reveal>
            <SectionHeading overline="Annual Reports">
              Download the <span className="text-maroon">Official Reports</span>
            </SectionHeading>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {data.reports.map((r, i) => (
              <Reveal key={r.year} delay={i * 0.1}>
                <div className="bg-white border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all h-full flex flex-col">
                  {r.image ? (
                    <img src={r.image} alt={r.title} className="w-full h-[220px] object-cover object-top" />
                  ) : (
                    <div className="w-full h-[220px] bg-maroon-dark flex items-center justify-center font-display text-[64px] text-white/20 font-bold">
                      {r.year}
                    </div>
                  )}
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[11px] text-maroon uppercase tracking-[2px] font-semibold mb-3">
                      <Award className="w-3.5 h-3.5" /> Official Report
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">{r.title}</h3>
                    <p className="text-[14px] text-muted-foreground mb-6 flex-1">{r.description}</p>
                    <Btn href={r.url} variant="solid" external>
                      <Download className="w-4 h-4" /> Download PDF
                    </Btn>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-maroon text-white">
        <div className="container-page text-center">
          <Reveal>
            <Overline className="!text-white/70 [&::before]:!bg-white/40 justify-center">For Recruiters</Overline>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold mt-5 leading-tight">
              Recruit from India's <span className="text-maroon-mid">Most Selective</span><br />Commerce Programme.
            </h2>
            <p className="text-[16px] text-white/75 max-w-2xl mx-auto mt-6 leading-relaxed">
              Connect with our Corporate Relations Team to schedule campus visits, summer internships, and final placements.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Btn to="/prospective-recruiters" variant="white">Recruiter Information</Btn>
              <Btn to="/corporate-relations-team" variant="white">Meet the CR Team</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
