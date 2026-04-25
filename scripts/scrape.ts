import * as cheerio from "cheerio";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const URLS = [
  "https://www.dsembaib.in",
  "https://www.dsembaib.in/about",
  "https://www.dsembaib.in/admissions-1",
  "https://www.dsembaib.in/admission-lists",
  "https://www.dsembaib.in/registration",
  "https://www.dsembaib.in/faqs",
  "https://www.dsembaib.in/programme-brochure",
  "https://www.dsembaib.in/facilities",
  "https://www.dsembaib.in/placements",
  "https://www.dsembaib.in/prospective-recruiters",
  "https://www.dsembaib.in/alumni",
  "https://www.dsembaib.in/alumni-committee",
  "https://www.dsembaib.in/alumni-dinner",
  "https://www.dsembaib.in/student-body",
  "https://www.dsembaib.in/ib-cell",
  "https://www.dsembaib.in/finance-cell",
  "https://www.dsembaib.in/marcom-cell",
  "https://www.dsembaib.in/copy-of-marcom-cell",
  "https://www.dsembaib.in/media-and-pr-cell",
  "https://www.dsembaib.in/sports-cell",
  "https://www.dsembaib.in/iisac",
  "https://www.dsembaib.in/corporate-relations-team",
  "https://www.dsembaib.in/team-convention",
  "https://www.dsembaib.in/batch-2020-2022",
  "https://www.dsembaib.in/batch-2021-2023",
  "https://www.dsembaib.in/batch-2022-2024",
  "https://www.dsembaib.in/batch-2023-2025",
  "https://www.dsembaib.in/copy-of-batch-2023-2025",
  "https://www.dsembaib.in/copy-of-batch-2024-2026",
  "https://www.dsembaib.in/time-table-batch-of-2023-24",
  "https://www.dsembaib.in/upcoming-events",
  "https://www.dsembaib.in/copy-of-upcoming-events",
  "https://www.dsembaib.in/synergy",
  "https://www.dsembaib.in/symposia",
  "https://www.dsembaib.in/ecclesia",
  "https://www.dsembaib.in/erudition",
  "https://www.dsembaib.in/erudition1",
  "https://www.dsembaib.in/copy-of-erudition",
  "https://www.dsembaib.in/erudition-testimonials",
  "https://www.dsembaib.in/tedx",
  "https://www.dsembaib.in/tedx1",
  "https://www.dsembaib.in/disco",
  "https://www.dsembaib.in/ravenbrain",
  "https://www.dsembaib.in/newsletters",
  "https://www.dsembaib.in/blog",
  "https://www.dsembaib.in/posts/test-blog",
  "https://www.dsembaib.in/media-coverage-form",
  "https://www.dsembaib.in/linkinbio",
  "https://www.dsembaib.in/the",
  "https://www.dsembaib.in/copy-of-home",
];

function slugFromUrl(u: string): string {
  const url = new URL(u);
  let p = url.pathname.replace(/^\/+|\/+$/g, "");
  if (!p) p = "index";
  return p.replace(/\//g, "_");
}

interface PageData {
  url: string;
  slug: string;
  title: string;
  description: string;
  headings: string[];
  paragraphs: string[];
  images: { src: string; alt: string }[];
  links: { href: string; text: string }[];
  rawText: string;
}

async function scrapeOne(url: string): Promise<PageData | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      },
    });
    if (!res.ok) {
      console.log(`  ✗ ${res.status} ${url}`);
      return null;
    }
    const html = await res.text();
    const $ = cheerio.load(html);

    const title =
      $("title").first().text().trim() ||
      $('meta[property="og:title"]').attr("content") ||
      "";
    const description =
      $('meta[name="description"]').attr("content") ||
      $('meta[property="og:description"]').attr("content") ||
      "";

    // Wix pages put content in #SITE_CONTAINER. Pull text from headings/paragraphs.
    const headings: string[] = [];
    $("h1, h2, h3").each((_, el) => {
      const t = $(el).text().trim().replace(/\s+/g, " ");
      if (t && t.length < 300 && !headings.includes(t)) headings.push(t);
    });

    const paragraphs: string[] = [];
    $("p, li").each((_, el) => {
      const t = $(el).text().trim().replace(/\s+/g, " ");
      if (t && t.length > 20 && t.length < 1500 && !paragraphs.includes(t))
        paragraphs.push(t);
    });

    const images: { src: string; alt: string }[] = [];
    $("img").each((_, el) => {
      const src = $(el).attr("src") || $(el).attr("data-src") || "";
      const alt = ($(el).attr("alt") || "").trim();
      if (
        src &&
        src.startsWith("http") &&
        !src.includes("favicon") &&
        !images.find((i) => i.src === src)
      ) {
        images.push({ src, alt });
      }
    });

    const links: { href: string; text: string }[] = [];
    $("a").each((_, el) => {
      const href = $(el).attr("href") || "";
      const text = $(el).text().trim().replace(/\s+/g, " ");
      if (
        href &&
        text &&
        text.length < 200 &&
        (href.includes("dsembaib") ||
          href.includes("commerce.du.ac.in") ||
          href.includes("uod.ac.in") ||
          href.endsWith(".pdf") ||
          href.includes("_files/ugd")) &&
        !links.find((l) => l.href === href)
      ) {
        links.push({ href, text });
      }
    });

    const rawText = $("body").text().replace(/\s+/g, " ").trim().slice(0, 8000);

    console.log(
      `  ✓ ${url} (${headings.length}h, ${paragraphs.length}p, ${images.length}img)`,
    );

    return {
      url,
      slug: slugFromUrl(url),
      title,
      description,
      headings,
      paragraphs,
      images: images.slice(0, 50),
      links: links.slice(0, 80),
      rawText,
    };
  } catch (e) {
    console.log(`  ✗ ${url}: ${(e as Error).message}`);
    return null;
  }
}

async function main() {
  const outDir = "src/data/pages";
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

  const index: { slug: string; url: string; title: string }[] = [];

  for (const url of URLS) {
    const data = await scrapeOne(url);
    if (data) {
      await writeFile(
        `${outDir}/${data.slug}.json`,
        JSON.stringify(data, null, 2),
      );
      index.push({ slug: data.slug, url: data.url, title: data.title });
    }
    // small delay to be polite
    await new Promise((r) => setTimeout(r, 250));
  }

  await writeFile(`${outDir}/_index.json`, JSON.stringify(index, null, 2));
  console.log(`\nDone. ${index.length}/${URLS.length} pages scraped.`);
}

main();
