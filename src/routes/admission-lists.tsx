import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/admission-lists.json";

export const Route = createFileRoute("/admission-lists")({
  head: () => ({
    meta: [
      { title: "Admission Lists — MBA-IB · DSE" },
      { name: "description", content: "Admission Lists at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Admission Lists — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Admissions"
      title="Admission Lists"
      
      breadcrumb={[{ label: "Admission Lists" }]}
    />
  );
}
