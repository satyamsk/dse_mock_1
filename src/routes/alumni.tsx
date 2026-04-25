import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/alumni.json";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — MBA-IB · DSE" },
      { name: "description", content: "Alumni at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Alumni — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Alumni"
      title="Alumni"
      italic="A Network for Life."
      breadcrumb={[{ label: "Alumni" }]}
    />
  );
}
