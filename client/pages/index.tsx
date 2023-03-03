import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Link href="/hello">hello</Link>
      </main>
    </>
  );
}
