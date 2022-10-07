import { Sport } from "./types/sports";

const SportCard = ({ sport }: { sport: Sport }) => {
  return (
    <div className="bg-black rounded-full m-4">
      <div className="w-10 h-10 text-black">{sport.title}</div>
    </div>
  );
};

export default SportCard;
