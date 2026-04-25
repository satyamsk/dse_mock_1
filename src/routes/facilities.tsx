import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/facilities.json";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — MBA-IB · DSE" },
      { name: "description", content: "Facilities at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Facilities — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Campus"
      title="Facilities"
      italic="On Campus"
      breadcrumb={[{ label: "Facilities" }]}
    />
  );
}
