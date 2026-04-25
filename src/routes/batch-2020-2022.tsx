import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/batch-2020-2022.json";

export const Route = createFileRoute("/batch-2020-2022")({
  head: () => ({
    meta: [
      { title: "Batch 2020–2022 — MBA-IB · DSE" },
      { name: "description", content: "Batch 2020–2022 at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Batch 2020–2022 — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Alumni Batch"
      title="Batch 2020–2022"
      
      breadcrumb={[{ label: "Batch 2020–2022" }]}
    />
  );
}
