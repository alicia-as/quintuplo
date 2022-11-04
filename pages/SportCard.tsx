import { useRef, useState } from "react";
import { Sport } from "../types/sports";
import { useHover, useTimeout } from "usehooks-ts";
import { Difficulty } from ".";

const SportCard = ({
  sport,
  isHighlighted,
  isSelected,
  timeout,
  difficulty,
  includeEffort = false,
}: {
  sport: Sport;
  isSelected: boolean;
  isHighlighted: boolean;
  timeout: number;
  difficulty: Difficulty;
  includeEffort: boolean;
}) => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  if (isSelected) {
    // console.log("My name is " + sport.title + " and my index is: " + index);
    const myTimeout = setTimeout(() => {
      setShouldDisplay(true);
      clearTimeout(myTimeout);
    }, timeout);
  }

  const [isFresh, setIsFresh] = useState(true);
  useTimeout(() => {
    setIsFresh(false);
  }, 1000);

  return (
    <div>
      <div
        ref={hoverRef}
        className={`flex ${
          includeEffort
            ? `${
                isFresh ? "md:w-2 md:h-2" : "md:w-28 md:h-28"
              } duration-700 ease-in-out`
            : "md:w-24 md:h-24"
        }  cursor-pointer m-4 rounded-full relative duration-500 ${
          isHighlighted ? "md:border-8 border-2 md:w-32 md:h-32" : "md:border"
        }
      ${
        isSelected && shouldDisplay
          ? "border w-8 h-8 bg-white text-bold text-black transition duration-1000 "
          : ""
      } justify-center items-center
      `}
      >
        <div className="flex flex-col items-center align-center">
          <div className="text-xl md:text-3xl">{sport?.emoji}</div>
          <div className="hidden md:block text-md md:text-xs font-medium text-center">
            {sport?.title}
            {isHover && !includeEffort && <p>{sport.target[difficulty]}</p>}
          </div>
        </div>
      </div>
      {includeEffort && (
        <div className="flex justify-center">
          <p className="text-xs max-w-[60px] text-center md:text-md font-bold text-white">
            {sport.target[difficulty]}
          </p>
        </div>
      )}
    </div>
  );
};

export default SportCard;
