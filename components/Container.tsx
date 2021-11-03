import Head from "next/head";
import Link from "next/link";

const Container = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="pt-10 mx-auto max-w-3xl">
        <header>
          <h1>Deno Useful Scripts List</h1>
        </header>
        {children}
        <footer className="absolute bottom-6 right-10 text-base">
          <Link href="https://github.com/comingAlive/denos">
            <a>Github</a>
          </Link>
        </footer>
      </main>
    </>
  );
};
export default Container;
