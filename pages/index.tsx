import { CodeComponent } from "../components";
import Container from "../components/Container";

export default function IndexPage() {
  const SITE_NAME =
    process.env.NODE_ENV === "production"
      ? "https://denos.xyz"
      : "http://localhost:3000";
  return (
    <Container
      title="Deno Useful Scripts List"
      description="Deno Useful Scripts List"
    >
      <article className="mt-10">
        <h2 id="1">Add Tailwind CSS to Next.js project</h2>
        <CodeComponent
          label="In your project folder run:"
          command="deno run --allow-write --allow-read --allow-run --no-check"
          link={`${SITE_NAME}/add-tailwind-to-next.ts`}
        />
        <CodeComponent
          label="or:"
          command="deno run -A"
          link={`${SITE_NAME}/t`}
        />
      </article>
    </Container>
  );
}
