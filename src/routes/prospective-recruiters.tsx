import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/prospective-recruiters.json";

export const Route = createFileRoute("/prospective-recruiters")({
  head: () => ({
    meta: [
      { title: "Prospective Recruiters — MBA-IB · DSE" },
      { name: "description", content: "Prospective Recruiters at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Prospective Recruiters — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="For Recruiters"
      title="Prospective Recruiters"
      
      breadcrumb={[{ label: "Prospective Recruiters" }]}
    />
  );
}
