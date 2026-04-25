import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/ravenbrain.json";

export const Route = createFileRoute("/ravenbrain")({
  head: () => ({
    meta: [
      { title: "Ravenbrain — MBA-IB · DSE" },
      { name: "description", content: "Ravenbrain at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Ravenbrain — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Quiz Society"
      title="Ravenbrain"
      
      breadcrumb={[{ label: "Ravenbrain" }]}
    />
  );
}
