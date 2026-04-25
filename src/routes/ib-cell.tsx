import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/ib-cell.json";

export const Route = createFileRoute("/ib-cell")({
  head: () => ({
    meta: [
      { title: "IB Cell — MBA-IB · DSE" },
      { name: "description", content: "IB Cell at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "IB Cell — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Cell"
      title="IB Cell"
      
      breadcrumb={[{ label: "IB Cell" }]}
    />
  );
}
