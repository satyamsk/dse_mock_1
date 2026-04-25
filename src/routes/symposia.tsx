import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/symposia.json";

export const Route = createFileRoute("/symposia")({
  head: () => ({
    meta: [
      { title: "Symposia — MBA-IB · DSE" },
      { name: "description", content: "Symposia at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Symposia — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Knowledge Series"
      title="Symposia"
      
      breadcrumb={[{ label: "Symposia" }]}
    />
  );
}
