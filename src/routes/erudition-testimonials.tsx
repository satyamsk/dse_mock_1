import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/erudition-testimonials.json";

export const Route = createFileRoute("/erudition-testimonials")({
  head: () => ({
    meta: [
      { title: "Erudition Testimonials — MBA-IB · DSE" },
      { name: "description", content: "Erudition Testimonials at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Erudition Testimonials — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Voices"
      title="Erudition Testimonials"
      
      breadcrumb={[{ label: "Erudition Testimonials" }]}
    />
  );
}
