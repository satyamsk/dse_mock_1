import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/copy-of-erudition.json";

export const Route = createFileRoute("/copy-of-erudition")({
  head: () => ({
    meta: [
      { title: "Erudition (Archive) — MBA-IB · DSE" },
      { name: "description", content: "Erudition (Archive) at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Erudition (Archive) — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Archive"
      title="Erudition (Archive)"
      
      breadcrumb={[{ label: "Erudition (Archive)" }]}
    />
  );
}
