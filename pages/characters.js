import Head from "next/head";
import Layout from "../components/layout";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function CharactersPage() {
  const { data, error } = useSWR(
    `${process.env.BACKEND_API}/characters?key=${process.env.AUTH_KEY}`,
    fetcher
  );

  if (error) return <Layout>failed to load</Layout>;
  if (!data) return <Layout>loading...</Layout>;

  return (
    <>
      <Head>
        <title>Characters</title>
      </Head>
      <Layout>
        {data.map((character) => (
          <div key={character._id}>{character.name}</div>
        ))}
      </Layout>
    </>
  );
}
