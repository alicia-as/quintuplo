import { useRef, useState } from "react";
import { Sport } from "../types/sports";
import { useHover } from "usehooks-ts";
import { Difficulty } from ".";

const SportCard = ({
  sport,
  isSelected,
  timeout,
  index,
  difficulty,
  includeEffort = false,
}: {
  sport: Sport;
  isSelected: boolean;
  timeout: number;
  index: number;
  difficulty: Difficulty;
  includeEffort: boolean;
}) => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  const timeOutInterval = 0;

  if (isSelected) {
    // console.log("My name is " + sport.title + " and my index is: " + index);
    const myTimeout = setTimeout(() => {
      setShouldDisplay(true);
      clearTimeout(myTimeout);
    }, timeout + index * timeOutInterval);
  }

  return (
    <div>
      <div
        ref={hoverRef}
        className={`flex md:w-32 md:h-32 cursor-pointer md:border m-4 md:rounded-full  relative
      ${
        isSelected && shouldDisplay ? "bg-white text-bold text-[#000]" : ""
      } justify-center items-center
      `}
      >
        {isHover && !includeEffort && (
          <div className="absolute top-0 bg-white z-10 flex flex-col justify-center items-center text-gray-800 rounded-lg p-4">
            <h1 className="text-2xl">{sport.title}</h1>
            <p className="text-sm">{sport.target[difficulty]}</p>
          </div>
        )}
        <div className="flex flex-col items-center align-center">
          <div className="text-xl md:text-3xl">{sport?.emoji}</div>
          <div className="hidden md:block text-md md:text-lg">
            {sport?.title}
          </div>
        </div>
      </div>
      {includeEffort && (
        <div className="text-center">
          <p className="text-sm font-medium text-white">
            {sport.target[difficulty]}
          </p>
        </div>
      )}
    </div>
  );
};

export default SportCard;
