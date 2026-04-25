import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/copy-of-home.json";

export const Route = createFileRoute("/copy-of-home")({
  head: () => ({
    meta: [
      { title: "Home (Archive) — MBA-IB · DSE" },
      { name: "description", content: "Home (Archive) at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Home (Archive) — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Archive"
      title="Home (Archive)"
      
      breadcrumb={[{ label: "Home (Archive)" }]}
    />
  );
}
