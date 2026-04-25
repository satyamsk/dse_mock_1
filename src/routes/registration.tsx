import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/registration.json";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — MBA-IB · DSE" },
      { name: "description", content: "Registration at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Registration — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Admissions"
      title="Registration"
      
      breadcrumb={[{ label: "Registration" }]}
    />
  );
}
