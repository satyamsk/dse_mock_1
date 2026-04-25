import { SITE } from "@/lib/site-config";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function MapEmbed({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid ${compact ? "" : "lg:grid-cols-5"} gap-8 items-stretch`}>
      <div className={`${compact ? "" : "lg:col-span-3"} relative border border-border bg-white p-2`}>
        <iframe
          title="Department of Commerce, DSE — Map"
          src={SITE.mapEmbed}
          width="100%"
          height={compact ? "320" : "460"}
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {!compact && (
        <div className="lg:col-span-2 bg-maroon text-white p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="overline !text-white/60 mb-5">Visit Us</div>
            <h3 className="font-display text-2xl font-bold mb-6 leading-tight">
              Delhi School of Economics
            </h3>
            <div className="space-y-5 text-[14px]">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-white/70" />
                <div className="leading-[1.65]">{SITE.address}</div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 shrink-0 text-white/70" />
                <a href={`tel:${SITE.phone}`} className="hover:underline">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 shrink-0 text-white/70" />
                <a href={`mailto:${SITE.email}`} className="hover:underline">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Delhi+School+of+Economics"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-maroon hover:bg-cream font-semibold text-[13px] tracking-wide py-3 transition-colors"
          >
            Open in Google Maps <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}
