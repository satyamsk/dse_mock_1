import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/iisac.json";

export const Route = createFileRoute("/iisac")({
  head: () => ({
    meta: [
      { title: "IISAC — MBA-IB · DSE" },
      { name: "description", content: "IISAC at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "IISAC — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Cell"
      title="IISAC"
      
      breadcrumb={[{ label: "IISAC" }]}
    />
  );
}
