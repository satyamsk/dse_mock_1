import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/admissions-1.json";

export const Route = createFileRoute("/admissions-1")({
  head: () => ({
    meta: [
      { title: "Admissions — MBA-IB · DSE" },
      { name: "description", content: "Admissions at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Admissions — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Admissions 2026–28"
      title="Admissions"
      italic="Begins Here."
      breadcrumb={[{ label: "Admissions" }]}
    />
  );
}
