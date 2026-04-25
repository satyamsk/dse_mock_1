import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/the.json";

export const Route = createFileRoute("/the")({
  head: () => ({
    meta: [
      { title: "The — MBA-IB · DSE" },
      { name: "description", content: "The at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "The — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Page"
      title="The"
      
      breadcrumb={[{ label: "The" }]}
    />
  );
}
