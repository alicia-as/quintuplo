import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import SportCard from "../SportCard";
import { Sport } from "../types/sports";
import { generateRandomSports } from "../utils/helpers";

const Home: NextPage<{ sports: Sport[] }> = ({ sports }) => {
  const [randomSports, setRandomSports] = useState<Sport[]>(sports);

  useEffect(() => {
    setRandomSports(generateRandomSports(sports, 5));
  }, [sports]);

  return (
    <div>
      <Head>
        <title>Fem sporter på én dag</title>
        <meta name="description" content="Don't forget to work out!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white h-screen">
        <h1>Fem sporter på én dag</h1>
        <h4>Random sports</h4>
        {randomSports.map((sport) => (
          <div>{sport.title}</div>
        ))}
        <br />
        {sports &&
          sports.map((sport) => <SportCard key={sport.id} sport={sport} />)}
      </main>
      <footer>Powered by Smauet Technology Group</footer>
    </div>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const sports = require("../data/sports.json");
  return {
    props: {
      sports,
    },
  };
}

export default Home;
