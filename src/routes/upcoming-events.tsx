import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/upcoming-events.json";

export const Route = createFileRoute("/upcoming-events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — MBA-IB · DSE" },
      { name: "description", content: "Upcoming Events at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Upcoming Events — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Calendar"
      title="Upcoming Events"
      italic="What's Next."
      breadcrumb={[{ label: "Upcoming Events" }]}
    />
  );
}
