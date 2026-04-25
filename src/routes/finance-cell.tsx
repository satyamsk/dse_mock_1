import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/finance-cell.json";

export const Route = createFileRoute("/finance-cell")({
  head: () => ({
    meta: [
      { title: "Finance Cell — MBA-IB · DSE" },
      { name: "description", content: "Finance Cell at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Finance Cell — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Cell"
      title="Finance Cell"
      
      breadcrumb={[{ label: "Finance Cell" }]}
    />
  );
}
