import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Bussines Card App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-rose-500 to-purple-600'>
        {!sessionData && (
          <button onClick={sessionData ? () => signOut() : () => signIn('google')} className="rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20">
            Masuk dengan Facebook
          </button>
        )}
      </div>
    </>
  );
};

export default Hom