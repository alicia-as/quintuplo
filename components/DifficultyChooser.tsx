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
    <div className="flex flex-row text-center items-center m-4 gap-4">
      <div className="flex justify-center items-center ">
        <Radio
          id="easy"
          name="type"
          checked={difficulty === "easy"}
          onChange={() => setDifficulty("easy")}
        />
        Lett
      </div>
      <div className="flex justify-center items-center ">
        <Radio
          id="medium"
          name="type"
          checked={difficulty === "medium"}
          onChange={() => setDifficulty("medium")}
        />
        Medium
      </div>
      <div className="flex justify-center items-center ">
        <Radio
          id="hard"
          name="type"
          checked={difficulty === "hard"}
          onChange={() => setDifficulty("hard")}
        />
        Vanskelig
      </div>
    </div>
  );
};

export default DifficultyChooser;
