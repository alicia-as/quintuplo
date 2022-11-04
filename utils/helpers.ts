import { Sport } from "../types/sports";
import seedrandom from "seedrandom";

export const generateRandomSports = (
  sports: Sport[],
  numberOfSports: number,
  useSeed: boolean = false
): Sport[] => {
  // Create a list multiplying the sports by their likelihood
  // Shuffle the list and pick the first `numberOfSports` unique items

  if (useSeed) {
    seedrandom("hello", { global: true });
  }

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

export const generateNewIndex = (
  previousIndex: number | null,
  rowSize: number,
  total: number
): number => {
  var newIndex = 0;
  if (previousIndex) {
    // It can move up, down, left, or right
    const direction = Math.floor(Math.random() * 4);
    switch (direction) {
      case 0:
        // Up
        newIndex = previousIndex - rowSize;
        break;
      case 1:
        // Down
        newIndex = previousIndex + rowSize;

        break;
      case 2:
        // Left
        newIndex = previousIndex - 1;

        break;
      case 3:
        // Right
        newIndex = previousIndex + 1;
        break;
    }
  } else {
    newIndex = Math.floor(Math.random() * total);
  }

  // If the new index is out of bounds, add or remove 5 until it's in bounds
  while (newIndex < 0 || newIndex > total - 1) {
    if (newIndex < 0) {
      newIndex += total;
    } else {
      newIndex -= total;
    }
  }
  return newIndex;
};
