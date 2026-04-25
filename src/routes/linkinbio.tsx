import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/linkinbio.json";

export const Route = createFileRoute("/linkinbio")({
  head: () => ({
    meta: [
      { title: "Link in Bio — MBA-IB · DSE" },
      { name: "description", content: "Link in Bio at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Link in Bio — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Quick Links"
      title="Link in Bio"
      
      breadcrumb={[{ label: "Link in Bio" }]}
    />
  );
}
