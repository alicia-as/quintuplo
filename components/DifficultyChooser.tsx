import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Difficulty } from "../pages";
import { Radio } from "@material-tailwind/react";

const DifficultyChooser = ({
  difficulty,
  setDifficulty,
}: {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
}) => {
  return (
    <div className="flex flex-row items-center gap-20 m-4">
      <Radio
        id="easy"
        name="type"
        label="Lett"
        checked={difficulty === "easy"}
        onChange={() => setDifficulty("easy")}
      />
      <Radio
        id="medium"
        name="type"
        label="Middels"
        checked={difficulty === "medium"}
        onChange={() => setDifficulty("medium")}
      />
      <Radio
        id="hard"
        name="type"
        label="Vanskelig"
        checked={difficulty === "hard"}
        onChange={() => setDifficulty("hard")}
      />
    </div>
  );
};

export default DifficultyChooser;
