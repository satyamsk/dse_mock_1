import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/erudition.json";

export const Route = createFileRoute("/erudition")({
  head: () => ({
    meta: [
      { title: "Erudition — MBA-IB · DSE" },
      { name: "description", content: "Erudition at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Erudition — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Annual Convention"
      title="Erudition"
      italic="Where Ideas Meet."
      breadcrumb={[{ label: "Erudition" }]}
    />
  );
}
