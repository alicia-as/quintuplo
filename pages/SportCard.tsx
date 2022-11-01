import { useRef, useState } from "react";
import { Sport } from "../types/sports";
import { useHover } from "usehooks-ts";

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

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  if (isSelected) {
    console.log("My name is " + sport.title + " and my index is: " + index);
    const myTimeout = setTimeout(() => {
      setShouldDisplay(true);
      clearTimeout(myTimeout);
    }, timeout + index * 1500);
  }

  return (
    <div
      ref={hoverRef}
      className={`flex md:w-32 md:h-32 cursor-pointer md:border m-4 md:rounded-full  relative
      ${
        isSelected && shouldDisplay ? "bg-white text-bold text-[#000]" : ""
      } justify-center items-center
      `}
    >
      {isHover && (
        <div className="absolute top-0 bg-white z-10 flex flex-col justify-center items-center text-gray-800 rounded-lg p-4">
          <h1 className="text-2xl">{sport.title}</h1>
          <p className="text-sm">{sport.target.medium}</p>
        </div>
      )}
      <div className="flex flex-col items-center align-center">
        <div className="text-xl md:text-3xl">{sport?.emoji}</div>
        <div className="hidden text-md md:text-xl">{sport?.title}</div>
      </div>
    </div>
  );
};

export default SportCard;
