import { CommandBlockWithTitle, Container } from "../components";
import useSubmitVisitor from "../hooks/useSubmitVisitor";
import Head from "next/head";

export default function IndexPage() {
  useSubmitVisitor();
  return (
    <Container
      title="Collection of Deno Scripts"
      description="Collection of Deno Scripts"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <article className="mt-10">
        <h2 id="1">Add Tailwind CSS to Next.js project</h2>
        <CommandBlockWithTitle
          label="In your project folder run:"
          command="deno run --allow-write --allow-read --allow-run"
          filePath="/add-tailwind-to-next.ts"
          info="By default it uses pnpm. If you don't have pnpm, it will use npm. You can force it by adding --npm/--yarn after the module name."
        />
      </article>
    </Container>
  );
}
