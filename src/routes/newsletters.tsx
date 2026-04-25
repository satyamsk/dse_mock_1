import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/newsletters.json";

export const Route = createFileRoute("/newsletters")({
  head: () => ({
    meta: [
      { title: "Newsletters — MBA-IB · DSE" },
      { name: "description", content: "Newsletters at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Newsletters — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Publications"
      title="Newsletters"
      
      breadcrumb={[{ label: "Newsletters" }]}
    />
  );
}
