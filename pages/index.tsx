import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import SportCard from "./SportCard";
import { Sport } from "../types/sports";
import { generateRandomSports } from "../utils/helpers";
import DifficultyChooser from "../components/DifficultyChooser";

export type Difficulty = "easy" | "medium" | "hard";

const Home: NextPage<{ sports: Sport[] }> = ({ sports }) => {
  const [randomSports, setRandomSports] = useState<Sport[]>(sports);
  const [generate, setGenerate] = useState<boolean>(false);

  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

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
      <main className="h-screen">
        <div className="flex justify-evenly w-screen p-4">
          <button
            className="text-sm md:text-xl p-2 mx-2 bg-blue-800"
            onClick={() => setGenerate(true)}
          >
            Generer tilfeldig quintuplo
          </button>
          <button
            className="text-sm md:text-xl p-2 bg-red-800"
            onClick={() => setGenerate(true)}
          >
            Generer månedens quintuplo
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div>
            <DifficultyChooser
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </div>
        </div>
        <div className="justify-items-center grid grid-cols-5 grid-rows-5 p-10 md:grid-cols-6">
          {sports &&
            sports.map((sport, index) => (
              <SportCard
                key={sport.id}
                sport={sport}
                isSelected={generate && randomSports.includes(sport)}
                timeout={2000}
                index={randomSports.indexOf(sport) + 1}
              />
            ))}
        </div>
      </main>
      {/* <footer>Powered by Smauet Technology Group</footer> */}
    </div>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const boringSports = require("../data/sports.json");
  const sports = boringSports.sort(() => Math.random() - 0.5);
  // const sortedSports = sports.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return {
    props: {
      sports,
    },
  };
}

export default Home;
