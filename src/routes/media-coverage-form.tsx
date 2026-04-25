import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/media-coverage-form.json";

export const Route = createFileRoute("/media-coverage-form")({
  head: () => ({
    meta: [
      { title: "Media Coverage Form — MBA-IB · DSE" },
      { name: "description", content: "Media Coverage Form at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Media Coverage Form — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Media & PR"
      title="Media Coverage Form"
      
      breadcrumb={[{ label: "Media Coverage Form" }]}
    />
  );
}
