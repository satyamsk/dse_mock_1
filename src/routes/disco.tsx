import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/disco.json";

export const Route = createFileRoute("/disco")({
  head: () => ({
    meta: [
      { title: "Disco — MBA-IB · DSE" },
      { name: "description", content: "Disco at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Disco — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Discussion Club"
      title="Disco"
      
      breadcrumb={[{ label: "Disco" }]}
    />
  );
}
