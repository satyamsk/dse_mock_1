import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/time-table-batch-of-2023-24.json";

export const Route = createFileRoute("/time-table-batch-of-2023-24")({
  head: () => ({
    meta: [
      { title: "Time Table 2023–24 — MBA-IB · DSE" },
      { name: "description", content: "Time Table 2023–24 at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Time Table 2023–24 — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Academic"
      title="Time Table 2023–24"
      
      breadcrumb={[{ label: "Time Table 2023–24" }]}
    />
  );
}
