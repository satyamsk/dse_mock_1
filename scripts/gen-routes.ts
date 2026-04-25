// Bulk-generate route files for every scraped page.
// Each route loads its scraped JSON and renders ContentPage.
import { readdirSync, writeFileSync, existsSync } from "node:fs";

const dataDir = "src/data/pages";
const routesDir = "src/routes";

// slug -> { route path, file name, label, overline, italic? }
const meta: Record<string, { route: string; file: string; label: string; overline: string; italic?: string }> = {
  about: { route: "/about", file: "about.tsx", label: "About MBA-IB", overline: "About", italic: "Since 1967" },
  "admissions-1": { route: "/admissions-1", file: "admissions-1.tsx", label: "Admissions", overline: "Admissions 2026–28", italic: "Begins Here." },
  "admission-lists": { route: "/admission-lists", file: "admission-lists.tsx", label: "Admission Lists", overline: "Admissions" },
  registration: { route: "/registration", file: "registration.tsx", label: "Registration", overline: "Admissions" },
  faqs: { route: "/faqs", file: "faqs.tsx", label: "FAQs", overline: "Help & Support", italic: "Answered." },
  "programme-brochure": { route: "/programme-brochure", file: "programme-brochure.tsx", label: "Programme Brochure", overline: "Brochure" },
  facilities: { route: "/facilities", file: "facilities.tsx", label: "Facilities", overline: "Campus", italic: "On Campus" },
  "prospective-recruiters": { route: "/prospective-recruiters", file: "prospective-recruiters.tsx", label: "Prospective Recruiters", overline: "For Recruiters" },
  alumni: { route: "/alumni", file: "alumni.tsx", label: "Alumni", overline: "Alumni", italic: "A Network for Life." },
  "alumni-committee": { route: "/alumni-committee", file: "alumni-committee.tsx", label: "Alumni Committee", overline: "Student Body" },
  "alumni-dinner": { route: "/alumni-dinner", file: "alumni-dinner.tsx", label: "Alumni Dinner", overline: "Annual Event" },
  "student-body": { route: "/student-body", file: "student-body.tsx", label: "Student Body", overline: "Student Body", italic: "By Students. For Students." },
  "ib-cell": { route: "/ib-cell", file: "ib-cell.tsx", label: "IB Cell", overline: "Student Cell" },
  "finance-cell": { route: "/finance-cell", file: "finance-cell.tsx", label: "Finance Cell", overline: "Student Cell" },
  "marcom-cell": { route: "/marcom-cell", file: "marcom-cell.tsx", label: "MarCom Cell", overline: "Student Cell" },
  "copy-of-marcom-cell": { route: "/copy-of-marcom-cell", file: "copy-of-marcom-cell.tsx", label: "MarCom (Archive)", overline: "Archive" },
  "media-and-pr-cell": { route: "/media-and-pr-cell", file: "media-and-pr-cell.tsx", label: "Media & PR Cell", overline: "Student Cell" },
  "sports-cell": { route: "/sports-cell", file: "sports-cell.tsx", label: "Sports Cell", overline: "Student Cell" },
  iisac: { route: "/iisac", file: "iisac.tsx", label: "IISAC", overline: "Student Cell" },
  "corporate-relations-team": { route: "/corporate-relations-team", file: "corporate-relations-team.tsx", label: "Corporate Relations Team", overline: "Placements" },
  "team-convention": { route: "/team-convention", file: "team-convention.tsx", label: "Team Convention", overline: "Erudition" },
  "batch-2020-2022": { route: "/batch-2020-2022", file: "batch-2020-2022.tsx", label: "Batch 2020–2022", overline: "Alumni Batch" },
  "batch-2021-2023": { route: "/batch-2021-2023", file: "batch-2021-2023.tsx", label: "Batch 2021–2023", overline: "Alumni Batch" },
  "batch-2022-2024": { route: "/batch-2022-2024", file: "batch-2022-2024.tsx", label: "Batch 2022–2024", overline: "Alumni Batch" },
  "batch-2023-2025": { route: "/batch-2023-2025", file: "batch-2023-2025.tsx", label: "Batch 2023–2025", overline: "Current Batch" },
  "copy-of-batch-2023-2025": { route: "/copy-of-batch-2023-2025", file: "copy-of-batch-2023-2025.tsx", label: "Batch 2023–25 (Archive)", overline: "Archive" },
  "copy-of-batch-2024-2026": { route: "/copy-of-batch-2024-2026", file: "copy-of-batch-2024-2026.tsx", label: "Batch 2024–26", overline: "Current Batch" },
  "time-table-batch-of-2023-24": { route: "/time-table-batch-of-2023-24", file: "time-table-batch-of-2023-24.tsx", label: "Time Table 2023–24", overline: "Academic" },
  "upcoming-events": { route: "/upcoming-events", file: "upcoming-events.tsx", label: "Upcoming Events", overline: "Calendar", italic: "What's Next." },
  "copy-of-upcoming-events": { route: "/copy-of-upcoming-events", file: "copy-of-upcoming-events.tsx", label: "Events (Archive)", overline: "Archive" },
  synergy: { route: "/synergy", file: "synergy.tsx", label: "Synergy", overline: "Annual Fest", italic: "B-School Fest." },
  symposia: { route: "/symposia", file: "symposia.tsx", label: "Symposia", overline: "Knowledge Series" },
  ecclesia: { route: "/ecclesia", file: "ecclesia.tsx", label: "Ecclesia", overline: "Event" },
  erudition: { route: "/erudition", file: "erudition.tsx", label: "Erudition", overline: "Annual Convention", italic: "Where Ideas Meet." },
  erudition1: { route: "/erudition1", file: "erudition1.tsx", label: "Erudition", overline: "Annual Convention" },
  "copy-of-erudition": { route: "/copy-of-erudition", file: "copy-of-erudition.tsx", label: "Erudition (Archive)", overline: "Archive" },
  "erudition-testimonials": { route: "/erudition-testimonials", file: "erudition-testimonials.tsx", label: "Erudition Testimonials", overline: "Voices" },
  tedx: { route: "/tedx", file: "tedx.tsx", label: "TEDx", overline: "Independent Talks", italic: "Ideas Worth Spreading." },
  tedx1: { route: "/tedx1", file: "tedx1.tsx", label: "TEDx", overline: "Independent Talks" },
  disco: { route: "/disco", file: "disco.tsx", label: "Disco", overline: "Discussion Club" },
  ravenbrain: { route: "/ravenbrain", file: "ravenbrain.tsx", label: "Ravenbrain", overline: "Quiz Society" },
  newsletters: { route: "/newsletters", file: "newsletters.tsx", label: "Newsletters", overline: "Publications" },
  blog: { route: "/blog", file: "blog.tsx", label: "Blog", overline: "Stories" },
  "posts_test-blog": { route: "/posts/test-blog", file: "posts.test-blog.tsx", label: "Test Blog Post", overline: "Blog Post" },
  "media-coverage-form": { route: "/media-coverage-form", file: "media-coverage-form.tsx", label: "Media Coverage Form", overline: "Media & PR" },
  linkinbio: { route: "/linkinbio", file: "linkinbio.tsx", label: "Link in Bio", overline: "Quick Links" },
  the: { route: "/the", file: "the.tsx", label: "The", overline: "Page" },
  "copy-of-home": { route: "/copy-of-home", file: "copy-of-home.tsx", label: "Home (Archive)", overline: "Archive" },
};

function tpl(slug: string, m: typeof meta[string]) {
  // Heading text from meta.label, italic optional
  return `import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/${slug}.json";

export const Route = createFileRoute("${m.route}")({
  head: () => ({
    meta: [
      { title: ${JSON.stringify(`${m.label} — MBA-IB · DSE`)} },
      { name: "description", content: ${JSON.stringify(`${m.label} at MBA (International Business), Department of Commerce, Delhi School of Economics.`)} },
      { property: "og:title", content: ${JSON.stringify(`${m.label} — MBA-IB DSE`)} },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline=${JSON.stringify(m.overline)}
      title=${JSON.stringify(m.label)}
      ${m.italic ? `italic=${JSON.stringify(m.italic)}` : ""}
      breadcrumb={[{ label: ${JSON.stringify(m.label)} }]}
    />
  );
}
`;
}

let written = 0, skipped = 0;
for (const [slug, m] of Object.entries(meta)) {
  const dataPath = `${dataDir}/${slug}.json`;
  if (!existsSync(dataPath)) {
    console.log(`  ⚠ no data for ${slug}`);
    continue;
  }
  const filePath = `${routesDir}/${m.file}`;
  if (existsSync(filePath)) {
    skipped++;
    continue;
  }
  writeFileSync(filePath, tpl(slug, m));
  written++;
}
console.log(`\nWrote ${written} new route files. Skipped ${skipped} existing.`);
