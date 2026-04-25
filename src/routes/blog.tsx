import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/blog.json";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — MBA-IB · DSE" },
      { name: "description", content: "Blog at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Blog — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Stories"
      title="Blog"
      
      breadcrumb={[{ label: "Blog" }]}
    />
  );
}
