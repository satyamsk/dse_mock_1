import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/copy-of-batch-2024-2026.json";

export const Route = createFileRoute("/copy-of-batch-2024-2026")({
  head: () => ({
    meta: [
      { title: "Batch 2024–26 — MBA-IB · DSE" },
      { name: "description", content: "Batch 2024–26 at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Batch 2024–26 — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Current Batch"
      title="Batch 2024–26"
      
      breadcrumb={[{ label: "Batch 2024–26" }]}
    />
  );
}
