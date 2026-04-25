import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/faqs.json";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — MBA-IB · DSE" },
      { name: "description", content: "FAQs at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "FAQs — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Help & Support"
      title="FAQs"
      italic="Answered."
      breadcrumb={[{ label: "FAQs" }]}
    />
  );
}
