import { CommandBlockWithTitle, Container } from "../components";
import { SITE_NAME } from "../lib/constants";

export default function IndexPage() {
  return (
    <Container
      title="Deno Useful Scripts List"
      description="Deno Useful Scripts List"
    >
      <article className="mt-10">
        <h2 id="1">Add Tailwind CSS to Next.js project</h2>
        <CommandBlockWithTitle
          label="In your project folder run:"
          command="deno run --allow-write --allow-read --allow-run"
          link={`${SITE_NAME}/add-tailwind-to-next.ts`}
        />
        <CommandBlockWithTitle
          label="or:"
          command="deno run --allow-write --allow-read --allow-run"
          link={`${SITE_NAME}/t`}
        />
      </article>
    </Container>
  );
}
