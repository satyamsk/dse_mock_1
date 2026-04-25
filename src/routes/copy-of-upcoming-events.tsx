import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/copy-of-upcoming-events.json";

export const Route = createFileRoute("/copy-of-upcoming-events")({
  head: () => ({
    meta: [
      { title: "Events (Archive) — MBA-IB · DSE" },
      { name: "description", content: "Events (Archive) at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Events (Archive) — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Archive"
      title="Events (Archive)"
      
      breadcrumb={[{ label: "Events (Archive)" }]}
    />
  );
}
