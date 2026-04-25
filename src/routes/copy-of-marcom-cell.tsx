import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/copy-of-marcom-cell.json";

export const Route = createFileRoute("/copy-of-marcom-cell")({
  head: () => ({
    meta: [
      { title: "MarCom (Archive) — MBA-IB · DSE" },
      { name: "description", content: "MarCom (Archive) at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "MarCom (Archive) — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Archive"
      title="MarCom (Archive)"
      
      breadcrumb={[{ label: "MarCom (Archive)" }]}
    />
  );
}
