import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/batch-2023-2025.json";

export const Route = createFileRoute("/batch-2023-2025")({
  head: () => ({
    meta: [
      { title: "Batch 2023–2025 — MBA-IB · DSE" },
      { name: "description", content: "Batch 2023–2025 at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Batch 2023–2025 — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Current Batch"
      title="Batch 2023–2025"
      
      breadcrumb={[{ label: "Batch 2023–2025" }]}
    />
  );
}
