import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Facebook, MapPin, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";

const FOOTER_COLS = [
  {
    title: "Programme",
    links: [
      { label: "About MBA-IB", href: "/about" },
      { label: "Admissions", href: "/admissions-1" },
      { label: "Programme Brochure", href: "/programme-brochure" },
      { label: "Facilities", href: "/facilities" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Placements",
    links: [
      { label: "Placements", href: "/placements" },
      { label: "Prospective Recruiters", href: "/prospective-recruiters" },
      { label: "Corporate Relations", href: "/corporate-relations-team" },
    ],
  },
  {
    title: "Student Body",
    links: [
      { label: "Student Body", href: "/student-body" },
      { label: "IB Cell", href: "/ib-cell" },
      { label: "Finance Cell", href: "/finance-cell" },
      { label: "MarCom Cell", href: "/marcom-cell" },
      { label: "Media & PR Cell", href: "/media-and-pr-cell" },
      { label: "Sports Cell", href: "/sports-cell" },
      { label: "IISAC", href: "/iisac" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Synergy", href: "/synergy" },
      { label: "Erudition", href: "/erudition" },
      { label: "Symposia", href: "/symposia" },
      { label: "Ecclesia", href: "/ecclesia" },
      { label: "TEDx", href: "/tedx" },
      { label: "Disco", href: "/disco" },
      { label: "Upcoming Events", href: "/upcoming-events" },
    ],
  },
  {
    title: "Alumni",
    links: [
      { label: "Alumni", href: "/alumni" },
      { label: "Alumni Committee", href: "/alumni-committee" },
      { label: "Alumni Dinner", href: "/alumni-dinner" },
      { label: "Newsletters", href: "/newsletters" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Batches",
    links: [
      { label: "Batch 2023–2025", href: "/batch-2023-2025" },
      { label: "Batch 2022–2024", href: "/batch-2022-2024" },
      { label: "Batch 2021–2023", href: "/batch-2021-2023" },
      { label: "Batch 2020–2022", href: "/batch-2020-2022" },
      { label: "Time Table", href: "/time-table-batch-of-2023-24" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-footer text-white/85 mt-24">
      <div className="container-wide py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://static.wixstatic.com/media/7fc140_85ea09cda4e24d5dae3df6e11c7a1e44~mv2.png/v1/fill/w_96,h_96,al_c,q_85/7fc140_85ea09cda4e24d5dae3df6e11c7a1e44~mv2.png"
                alt="MBA-IB DSE Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-display font-bold text-xl text-white">MBA (IB)</div>
                <div className="text-[10px] uppercase tracking-[2.5px] text-white/50">
                  Delhi School of Economics
                </div>
              </div>
            </div>
            <p className="text-[14px] text-white/65 leading-relaxed mb-6 max-w-sm">
              The MBA (International Business) programme at the Department of Commerce, Delhi School
              of Economics — shaping global business leaders since 1967.
            </p>
            <div className="space-y-2.5 text-[13px] text-white/70">
              <div className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-maroon-mid shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-maroon-mid shrink-0" />
                <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-maroon-mid shrink-0" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
                { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
                { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
                { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 hover:bg-maroon hover:border-maroon transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-[14px] text-white mb-4 tracking-wide">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        to={l.href}
                        className="text-[13px] text-white/65 hover:text-white transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] text-white/50">
          <div>
            © {new Date().getFullYear()} Department of Commerce, Delhi School of Economics ·
            University of Delhi
          </div>
          <div className="flex gap-5">
            <a href={SITE.departmentSite} target="_blank" rel="noopener noreferrer">
              commerce.du.ac.in
            </a>
            <a href={SITE.applicationPortal} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
