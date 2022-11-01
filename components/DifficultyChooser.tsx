import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Difficulty } from "../pages";

const DifficultyChooser = ({
  difficulty,
  setDifficulty,
}: {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
}) => {
  return (
    <RadioGroup
      value={difficulty}
      onChange={setDifficulty}
      className="flex flex-row w-full justify-between"
    >
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <div>
        <RadioGroup.Option value="easy">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Lett</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="medium">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Middels</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="hard">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Vanskelig</span>
          )}
        </RadioGroup.Option>
      </div>
    </RadioGroup>
  );
};

export default DifficultyChooser;
