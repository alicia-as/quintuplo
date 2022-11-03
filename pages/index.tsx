import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import SportCard from "./SportCard";
import { Sport } from "../types/sports";
import { generateRandomSports } from "../utils/helpers";
import DifficultyChooser from "../components/DifficultyChooser";

export type Difficulty = "easy" | "medium" | "hard";

export type GenerateType = "random" | "monthly" | null;

const Home: NextPage<{ sports: Sport[] }> = ({ sports }) => {
  const [randomSports, setRandomSports] = useState<Sport[]>([]);

  useEffect(() => {
    const randomSports = sports.sort(() => Math.random() - 0.5);
    setRandomSports(randomSports);
  }, [sports]);

  const [selectedSports, setSelectedSports] = useState<Sport[]>([]);
  const [generate, setGenerate] = useState<GenerateType>(null);

  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  useEffect(() => {
    switch (generate) {
      case "random":
        setSelectedSports(generateRandomSports(sports, 5));
        break;
      case "monthly":
        setSelectedSports(generateRandomSports(sports, 5, true));
        break;
      default:
        setSelectedSports([]);
    }
  }, [generate]);

  return (
    <div>
      <Head>
        <title>Fem sporter på én dag</title>
        <meta name="description" content="Don't forget to work out!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <div className="flex flex-col justify-center items-center w-screen p-4">
          <button
            className="text-sm max-w-screen-sm md:text-xl p-2 mx-2 bg-blue-800"
            onClick={() => {
              setGenerate(null);
              setGenerate("random");
            }}
          >
            Generer tilfeldig quintuplo
          </button>
          {/* <button
            className="text-sm md:text-xl p-2 bg-red-800"
            onClick={() => {
              setGenerate(null);
              setGenerate("monthly");
            }}
          >
            Generer månedens quintuplo
          </button> */}

          <DifficultyChooser
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>

        <div className="justify-items-center grid grid-cols-5 grid-rows-5 p-10 md:grid-cols-6">
          {randomSports &&
            randomSports.map((sport, index) => (
              <SportCard
                key={sport.id}
                sport={sport}
                isSelected={generate !== null && selectedSports.includes(sport)}
                timeout={0}
                index={sports.indexOf(sport) + 1}
                difficulty={difficulty}
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

  const sports = require("../data/sports.json");

  return {
    props: {
      sports,
    },
  };
}

export default Home;
