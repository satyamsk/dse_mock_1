import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import data from "@/data/pages/posts_test-blog.json";

export const Route = createFileRoute("/posts/test-blog")({
  head: () => ({
    meta: [
      { title: "Test Blog Post — MBA-IB · DSE" },
      { name: "description", content: "Test Blog Post at MBA (International Business), Department of Commerce, Delhi School of Economics." },
      { property: "og:title", content: "Test Blog Post — MBA-IB DSE" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      data={data as any}
      overline="Blog Post"
      title="Test Blog Post"
      
      breadcrumb={[{ label: "Test Blog Post" }]}
    />
  );
}
