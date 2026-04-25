import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, SITE } from "@/lib/site-config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/95 border-b border-border transition-shadow ${
          scrolled ? "shadow-[0_2px_28px_rgba(0,0,0,0.07)]" : ""
        }`}
      >
        <div className="container-wide flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://static.wixstatic.com/media/7fc140_85ea09cda4e24d5dae3df6e11c7a1e44~mv2.png/v1/fill/w_88,h_88,al_c,q_85/7fc140_85ea09cda4e24d5dae3df6e11c7a1e44~mv2.png"
              alt="MBA-IB DSE Logo"
              className="w-11 h-11 object-contain shrink-0"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-bold text-[17px] text-maroon tracking-tight">
                MBA (IB)
              </span>
              <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-[2.5px] mt-0.5">
                Delhi School of Economics
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={item.href}
                  className="text-[13.5px] font-medium text-ink-2 hover:text-maroon transition-colors py-2 inline-flex items-center gap-1"
                  activeProps={{ className: "text-maroon" }}
                  activeOptions={{ exact: item.href === "/" }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>
                {item.children && openMenu === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                    <div className="bg-white border border-border shadow-lg py-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          to={c.href}
                          className="block px-4 py-2 text-[13px] text-ink-2 hover:bg-maroon-light hover:text-maroon transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.applicationPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white px-5 py-2.5 text-[12.5px] font-semibold tracking-wide transition-colors"
            >
              Apply Now →
            </a>
            <button
              className="lg:hidden p-2 text-maroon"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-cream transition-opacity lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-maroon">
            <X className="w-7 h-7" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-5 px-6 pb-10 overflow-y-auto h-[calc(100vh-80px)]">
          {NAV.map((item) => (
            <div key={item.label} className="w-full max-w-md text-center">
              <Link
                to={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-maroon block py-1"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-1 mb-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      onClick={() => setOpen(false)}
                      className="text-[12px] text-muted-foreground hover:text-maroon"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={SITE.applicationPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-maroon text-white px-8 py-3 text-sm font-semibold"
          >
            Apply Now →
          </a>
        </nav>
      </div>
    </>
  );
}
