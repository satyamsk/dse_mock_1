import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/synergy.json";

export const Route = createFileRoute("/synergy")({
  head: () => ({
    meta: [
      { title: "Synergy — MBA-IB · DSE" },
      { name: "description", content: "Synergy at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Synergy — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Annual Fest"
      title="Synergy"
      italic="B-School Fest."
      breadcrumb={[{ label: "Synergy" }]}
    />
  );
}
