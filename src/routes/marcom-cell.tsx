import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/marcom-cell.json";

export const Route = createFileRoute("/marcom-cell")({
  head: () => ({
    meta: [
      { title: "MarCom Cell — MBA-IB · DSE" },
      { name: "description", content: "MarCom Cell at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "MarCom Cell — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Cell"
      title="MarCom Cell"
      
      breadcrumb={[{ label: "MarCom Cell" }]}
    />
  );
}
