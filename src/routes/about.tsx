import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/about.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MBA-IB — MBA-IB · DSE" },
      { name: "description", content: "About MBA-IB at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "About MBA-IB — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="About"
      title="About MBA-IB"
      italic="Since 1967"
      breadcrumb={[{ label: "About MBA-IB" }]}
    />
  );
}
