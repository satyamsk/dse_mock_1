import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/copy-of-batch-2023-2025.json";

export const Route = createFileRoute("/copy-of-batch-2023-2025")({
  head: () => ({
    meta: [
      { title: "Batch 2023–25 (Archive) — MBA-IB · DSE" },
      { name: "description", content: "Batch 2023–25 (Archive) at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Batch 2023–25 (Archive) — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Archive"
      title="Batch 2023–25 (Archive)"
      
      breadcrumb={[{ label: "Batch 2023–25 (Archive)" }]}
    />
  );
}
