import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/alumni-dinner.json";

export const Route = createFileRoute("/alumni-dinner")({
  head: () => ({
    meta: [
      { title: "Alumni Dinner — MBA-IB · DSE" },
      { name: "description", content: "Alumni Dinner at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Alumni Dinner — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Annual Event"
      title="Alumni Dinner"
      
      breadcrumb={[{ label: "Alumni Dinner" }]}
    />
  );
}
