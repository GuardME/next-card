import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState} from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import BusinessCard from "../components/Card/BusinessCard";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const [inputs, setInputs] = useState({
    title: '',
    website: ''
  });

  return (
    <>
      <Head>
        <title>Bussines Card App</title>
        <meta name="description" content="Generated by create-t3-app" />
          <meta property="og:image" content="example com/ogp.jpg" />
  <meta property="og:image:secure_url" content="secure.example com/ogp.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="300" />
  <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-slate-300 to-Zinc-300'>
        {!sessionData && (
          <button onClick={sessionData ? () => signOut() : () => signIn('facebook')} className="rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20">
            Masuk dengan Facebook
          </button>
        )}

          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-left text-3xl font-semibold text-black">
              beritahu tentang anda
            </h2>
            <div className="mb-12 grid grid-cols-2 gap-8">

  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Title
              </label>
              <div className="mt-1">
                <input
                value={inputs.title}
                onChange={(e) => setInputs((prev) => ({ ...prev, title: e.target.value }))}
                type="text"
                name="title"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Programmer Laravel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Website
              </label>
              <div className="mt-1">
                <input
                value={inputs.website}
                onChange={(e) => setInputs((prev) => ({ ...prev, website: e.target.value }))}
                type="text"
                name="title"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="ramaportofolio.netlify.com"
                />
              </div>
            </div>


              
            </div>
          

        {/* Card */}
        {sessionData && (
          <div className="flex flex-col items-center justify-center">
            <BusinessCard inputs={inputs}/>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Home;

