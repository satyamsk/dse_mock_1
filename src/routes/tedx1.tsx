import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/tedx1.json";

export const Route = createFileRoute("/tedx1")({
  head: () => ({
    meta: [
      { title: "TEDx — MBA-IB · DSE" },
      { name: "description", content: "TEDx at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "TEDx — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Independent Talks"
      title="TEDx"
      
      breadcrumb={[{ label: "TEDx" }]}
    />
  );
}
