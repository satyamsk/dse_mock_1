import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/alumni-committee.json";

export const Route = createFileRoute("/alumni-committee")({
  head: () => ({
    meta: [
      { title: "Alumni Committee — MBA-IB · DSE" },
      { name: "description", content: "Alumni Committee at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Alumni Committee — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Body"
      title="Alumni Committee"
      
      breadcrumb={[{ label: "Alumni Committee" }]}
    />
  );
}
