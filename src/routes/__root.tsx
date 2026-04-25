import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center bg-cream px-4 pt-32">
        <div className="max-w-md text-center">
          <h1 className="font-display text-[120px] font-bold text-maroon leading-none">404</h1>
          <h2 className="font-display text-2xl font-bold text-ink mt-4">Page not found</h2>
          <p className="text-muted-foreground mt-3">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center bg-maroon hover:bg-maroon-dark text-white px-7 py-3 text-sm font-semibold tracking-wide transition-colors"
          >
            ← Return Home
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "MBA (International Business) — Department of Commerce, Delhi School of Economics",
      },
      {
        name: "description",
        content:
          "MBA (International Business) — a flagship two-year programme at the Department of Commerce, Delhi School of Economics, University of Delhi. Shaping global business leaders since 1967.",
      },
      { name: "author", content: "Department of Commerce, DSE" },
      { property: "og:title", content: "MBA (International Business) — Delhi School of Economics" },
      {
        property: "og:description",
        content:
          "Two-year flagship programme at India's most respected commerce faculty. Admissions open for Batch 2026–28.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@dsembaib" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
