import { TICKER_ITEMS } from "@/lib/site-config";

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="bg-maroon h-12 flex items-center overflow-hidden">
      <div className="shrink-0 px-5 h-full bg-maroon-dark text-white font-bold text-[10px] uppercase tracking-[3px] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white blink-dot" />
        Live
      </div>
      <div className="flex-1 overflow-hidden flex items-center">
        <div className="flex w-max ticker-anim pl-8">
          {items.map((t, i) => (
            <span
              key={i}
              className="px-8 text-[12px] text-white/90 whitespace-nowrap border-r border-white/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
