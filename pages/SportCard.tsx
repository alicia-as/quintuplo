import { useState } from "react";
import { Sport } from "../types/sports";

const SportCard = ({
  sport,
  isSelected,
  timeout,
  index,
}: {
  sport: Sport;
  isSelected: boolean;
  timeout: number;
  index: number;
}) => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  if (isSelected) {
    console.log("My name is " + sport.title + " and my index is: " + index);
    const myTimeout = setTimeout(() => {
      setShouldDisplay(true);
      clearTimeout(myTimeout);
    }, timeout + index * 1500);
  }

  return (
    <div
      className={`flex w-40 h-40 border m-4 md:w-21 md:h-21 ${
        isSelected && shouldDisplay ? "bg-white text-bold text-[#000]" : ""
      } rounded-full justify-center items-center`}
    >
      <div className="flex flex-col items-center align-center">
        <div className="text-5xl md:text-3xl">{sport?.emoji}</div>
        <div className="text-xl md:text-base">{sport?.title}</div>
      </div>
    </div>
  );
};

export default SportCard;
