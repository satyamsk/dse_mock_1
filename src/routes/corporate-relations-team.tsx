import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/corporate-relations-team.json";

export const Route = createFileRoute("/corporate-relations-team")({
  head: () => ({
    meta: [
      { title: "Corporate Relations Team — MBA-IB · DSE" },
      { name: "description", content: "Corporate Relations Team at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Corporate Relations Team — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Placements"
      title="Corporate Relations Team"
      
      breadcrumb={[{ label: "Corporate Relations Team" }]}
    />
  );
}
