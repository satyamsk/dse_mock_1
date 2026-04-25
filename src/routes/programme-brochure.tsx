import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/programme-brochure.json";

export const Route = createFileRoute("/programme-brochure")({
  head: () => ({
    meta: [
      { title: "Programme Brochure — MBA-IB · DSE" },
      { name: "description", content: "Programme Brochure at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Programme Brochure — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Brochure"
      title="Programme Brochure"
      
      breadcrumb={[{ label: "Programme Brochure" }]}
    />
  );
}
