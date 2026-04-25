import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/team-convention.json";

export const Route = createFileRoute("/team-convention")({
  head: () => ({
    meta: [
      { title: "Team Convention — MBA-IB · DSE" },
      { name: "description", content: "Team Convention at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Team Convention — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Erudition"
      title="Team Convention"
      
      breadcrumb={[{ label: "Team Convention" }]}
    />
  );
}
