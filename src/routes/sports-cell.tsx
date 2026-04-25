import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/sports-cell.json";

export const Route = createFileRoute("/sports-cell")({
  head: () => ({
    meta: [
      { title: "Sports Cell — MBA-IB · DSE" },
      { name: "description", content: "Sports Cell at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Sports Cell — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Cell"
      title="Sports Cell"
      
      breadcrumb={[{ label: "Sports Cell" }]}
    />
  );
}
