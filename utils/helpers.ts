import { Sport } from "../types/sports";

export const generateRandomSports = (
  sports: Sport[],
  numberOfSports: number
): Sport[] => {
  // Create a list multiplying the sports by their likelihood
  // Shuffle the list and pick the first `numberOfSports` unique items
  const sportsList: Sport[] = sports
    .filter((sport) => !sport.isFinalOnly)
    .flatMap((sport) => Array(sport.likelihood).fill(sport))
    .sort(() => Math.random() - 0.5)
    .filter((sport, index, self) => self.indexOf(sport) === index)
    .slice(0, numberOfSports - 1);

  const lastSport: Sport = sports
    .filter((sport) => sport.isFinalOnly)
    .flatMap((sport) => Array(sport.likelihood).fill(sport))
    .sort(() => Math.random() - 0.5)
    .filter((sport, index, self) => self.indexOf(sport) === index)[0];

  const randomSports = [...sportsList, lastSport];
  return randomSports;
};
