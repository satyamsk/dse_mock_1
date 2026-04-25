import { Link } from "@tanstack/react-router";
import { PageHero } from "./PageHero";
import { Reveal, Overline } from "./Primitives";
import { Btn } from "./Btn";
import { ExternalLink, FileText } from "lucide-react";

interface PageData {
  url: string;
  slug: string;
  title: string;
  description: string;
  headings: string[];
  paragraphs: string[];
  images: { src: string; alt: string }[];
  links: { href: string; text: string }[];
}

export function ContentPage({
  data,
  overline,
  title,
  italic,
  subtitle,
  breadcrumb,
  children,
}: {
  data: PageData;
  overline: string;
  title: string;
  italic?: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  // Filter usable images (skip tiny icons / svg blanks)
  const images = data.images.filter(
    (i) =>
      !i.src.includes("svg") &&
      !i.src.includes("favicon") &&
      !i.src.match(/w_\d{1,2}[,_]/) // skip thumbs
  ).slice(0, 8);

  // Pull PDFs from links
  const pdfs = data.links.filter((l) => l.href.endsWith(".pdf") || l.href.includes("_files/ugd"));
  const externalLinks = data.links.filter(
    (l) => l.href.startsWith("http") && !pdfs.includes(l) && !l.href.includes("dsembaib.in"),
  ).slice(0, 8);

  // Group paragraphs into sections by alternating with headings (best effort)
  const heroPara = data.paragraphs[0] || subtitle || "";
  const bodyParas = data.paragraphs.slice(1, 16);
  const sectionHeadings = data.headings.filter(
    (h) => h.length > 4 && h.length < 120 && !h.toLowerCase().includes("menu"),
  ).slice(0, 8);

  return (
    <>
      <PageHero
        overline={overline}
        title={title}
        italic={italic}
        subtitle={subtitle || heroPara.slice(0, 280)}
        breadcrumb={breadcrumb}
      />

      {children}

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-[1fr_320px] gap-14">
          <article>
            {sectionHeadings.length > 0 && (
              <Reveal>
                <Overline>On This Page</Overline>
                <div className="grid sm:grid-cols-2 gap-2 mt-5 mb-12">
                  {sectionHeadings.map((h) => (
                    <div key={h} className="border-l-2 border-maroon/40 pl-4 py-1.5 text-[14px] text-ink-2">
                      {h}
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <div className="space-y-6">
              {bodyParas.length > 0 ? (
                bodyParas.map((p, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <p className="text-[16.5px] text-ink-2/85 leading-[1.85] font-serif">{p}</p>
                  </Reveal>
                ))
              ) : (
                <Reveal>
                  <p className="text-[16.5px] text-ink-2/85 leading-[1.85] font-serif">
                    Detailed content for this page will be updated shortly. In the meantime, you can
                    refer to the original page or get in touch with the Department of Commerce
                    directly.
                  </p>
                </Reveal>
              )}
            </div>

            {images.length > 0 && (
              <Reveal>
                <div className="grid sm:grid-cols-2 gap-4 mt-14">
                  {images.map((img, i) => (
                    <div key={i} className={`bg-white border border-border overflow-hidden ${i === 0 ? "sm:col-span-2" : ""}`}>
                      <img
                        src={img.src}
                        alt={img.alt || title}
                        className={`w-full ${i === 0 ? "h-[420px]" : "h-[240px]"} object-cover`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </article>

          <aside className="space-y-7 lg:sticky lg:top-28 lg:self-start">
            {pdfs.length > 0 && (
              <div className="bg-white border border-border p-6">
                <Overline>Documents</Overline>
                <div className="space-y-2 mt-4">
                  {pdfs.slice(0, 8).map((p, i) => (
                    <a
                      key={i}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 hover:bg-maroon-light text-[13px] text-ink-2 hover:text-maroon transition-colors group border border-transparent hover:border-maroon/15"
                    >
                      <FileText className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                      <span className="flex-1">{p.text || `Document ${i + 1}`}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {externalLinks.length > 0 && (
              <div className="bg-white border border-border p-6">
                <Overline>External Links</Overline>
                <div className="space-y-2 mt-4">
                  {externalLinks.map((l, i) => (
                    <a
                      key={i}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 text-[13px] text-ink-2 hover:text-maroon"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-maroon shrink-0 mt-1" />
                      <span>{l.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-maroon text-white p-6">
              <Overline className="!text-white/70 [&::before]:!bg-white/40">Quick Links</Overline>
              <div className="space-y-2 mt-4 text-[13px]">
                <Link to="/admissions-1" className="block hover:underline">→ Admissions</Link>
                <Link to="/placements" className="block hover:underline">→ Placements</Link>
                <Link to="/student-body" className="block hover:underline">→ Student Body</Link>
                <Link to="/upcoming-events" className="block hover:underline">→ Events</Link>
                <Link to="/alumni" className="block hover:underline">→ Alumni</Link>
                <Link to="/faqs" className="block hover:underline">→ FAQs</Link>
              </div>
            </div>

            <Btn href={data.url} variant="ghost" external className="!w-full justify-center">
              View Original Page
            </Btn>
          </aside>
        </div>
      </section>
    </>
  );
}
