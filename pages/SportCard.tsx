import { useRef, useState } from "react";
import { Sport } from "../types/sports";
import { useHover } from "usehooks-ts";
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

  return (
    <div>
      <div
        ref={hoverRef}
        className={`flex ${
          includeEffort
            ? "md:w-28 md:h-28 transition ease-in-out delay-150"
            : "md:w-24 md:h-24"
        }  cursor-pointer m-4 rounded-full relative duration-500 ${
          isHighlighted ? "md:border-4 border-2" : "md:border"
        }
      ${
        isSelected && shouldDisplay
          ? "border w-8 h-8 bg-white text-bold text-[#000]"
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
          <p className="text-xs md:text-md font-bold text-white">
            {sport.target[difficulty]}
          </p>
        </div>
      )}
    </div>
  );
};

export default SportCard;
