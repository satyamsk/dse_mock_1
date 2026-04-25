import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/student-body.json";

export const Route = createFileRoute("/student-body")({
  head: () => ({
    meta: [
      { title: "Student Body — MBA-IB · DSE" },
      { name: "description", content: "Student Body at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Student Body — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Student Body"
      title="Student Body"
      italic="By Students. For Students."
      breadcrumb={[{ label: "Student Body" }]}
    />
  );
}
