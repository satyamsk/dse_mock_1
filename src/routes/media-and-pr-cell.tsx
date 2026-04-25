import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/media-and-pr-cell.json";

export const Route = createFileRoute("/media-and-pr-cell")({
  head: () => ({
    meta: [
      { title: "Media & PR Cell — MBA-IB · DSE" },
      { name: "description", content: "Media & PR Cell at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Media & PR Cell — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Cell"
      title="Media & PR Cell"
      
      breadcrumb={[{ label: "Media & PR Cell" }]}
    />
  );
}
