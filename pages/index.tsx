import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import SportCard from "./SportCard";
import { Sport } from "../types/sports";
import { generateNewIndex, generateRandomSports } from "../utils/helpers";
import DifficultyChooser from "../components/DifficultyChooser";
import { useInterval } from "usehooks-ts";

export type Difficulty = "easy" | "medium" | "hard";

export type GenerateType = "random" | "monthly" | null;

const Home: NextPage<{ sports: Sport[] }> = ({ sports }) => {
  const [randomSports, setRandomSports] = useState<Sport[]>([]);

  useEffect(() => {
    const randomSports = sports.sort(() => Math.random() - 0.5);
    setRandomSports(randomSports);
  }, [sports]);

  const [selectedSports, setSelectedSports] = useState<Sport[]>([]);
  const [visitedSports, setVisitedSports] = useState<Sport[]>([]);
  const [generate, setGenerate] = useState<GenerateType>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  const [randomIndex, setRandomIndex] = useState<number>(-1);

  useEffect(() => {
    if (isSelectedSportIndex(randomIndex)) {
      const sport = randomSports[randomIndex];
      // Ensure that it's not already there...
      if (!visitedSports.includes(sport)) {
        setTimeout(() => {
          setVisitedSports([...visitedSports, sport]);
        }, 1000);
      }
    }
  }, [randomIndex]);

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

  const isSelected = (sport: Sport) => {
    return generate !== null && visitedSports.includes(sport);
  };

  const [previousIndex, setPreviousIndex] = useState<number | null>(0);

  const isSelectedSportIndex = (index: number) => {
    return generate && selectedSports.includes(randomSports[index]);
  };

  const generateTimeOut = (index: number) => {
    if (
      isSelectedSportIndex(index) &&
      !visitedSports.includes(randomSports[index])
    ) {
      return 5000;
    } else if (visitedSports.length === 5) {
      return null;
    } else {
      return 1000;
    }
  };

  useInterval(() => {
    const newIndex = generateNewIndex(previousIndex, 5, randomSports.length);
    setPreviousIndex(newIndex);
    setRandomIndex(newIndex);
  }, generateTimeOut(randomIndex));

  const onGenerateClicked = () => {
    setSelectedSports([]);
    setGenerate("random");
  };

  return (
    <div>
      <Head>
        <title>Fem sporter på én dag</title>
        <meta name="description" content="Don't forget to work out!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <div className="flex flex-col justify-center items-center ">
          <button
            className="text-sm max-w-screen-sm md:text-xl p-2 mx-2 bg-blue-800"
            onClick={onGenerateClicked}
          >
            Generer tilfeldig quintuplo
          </button>

          <DifficultyChooser
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>

        <div className="flex w-full justify-evenly md:items-center  w-full">
          {visitedSports.map((sport, index) => (
            <SportCard
              key={sport.title}
              sport={sport}
              isSelected={true}
              isHighlighted={false}
              timeout={1000}
              difficulty={difficulty}
              includeEffort={true}
            />
          ))}
        </div>

        <div className="justify-items-center grid grid-cols-5 grid-rows-5 p-10 ">
          {randomSports &&
            randomSports.map((sport, index) => (
              <SportCard
                key={sport.id}
                sport={sport}
                isSelected={isSelected(sport)}
                isHighlighted={generate !== null && index === randomIndex}
                timeout={0}
                difficulty={difficulty}
                includeEffort={false}
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
