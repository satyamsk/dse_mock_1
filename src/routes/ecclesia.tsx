import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/ecclesia.json";

export const Route = createFileRoute("/ecclesia")({
  head: () => ({
    meta: [
      { title: "Ecclesia — MBA-IB · DSE" },
      { name: "description", content: "Ecclesia at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Ecclesia — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Event"
      title="Ecclesia"
      
      breadcrumb={[{ label: "Ecclesia" }]}
    />
  );
}
