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
        className={`flex md:w-24 md:h-24 cursor-pointer md:border m-4 md:rounded-full  relative
      ${
        isSelected && shouldDisplay ? "bg-white text-bold text-[#000]" : ""
      } justify-center items-center
      `}
      >
        <div className="flex flex-col items-center align-center">
          <div className="text-xl md:text-3xl">{sport?.emoji}</div>
          <div className="hidden md:block text-md md:text-xs font-medium">
            {sport?.title}
            {isHover && !includeEffort && <p>{sport.target[difficulty]}</p>}
          </div>
        </div>
      </div>
      {includeEffort && (
        <div className="">
          <p className="text-sm font-medium text-white">
            {sport.target[difficulty]}
          </p>
        </div>
      )}
    </div>
  );
};

export default SportCard;
