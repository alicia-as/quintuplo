import { Sport } from "../types/sports";

const SportCircle = (sport: Sport) => {
  return <div className="bg-black">{sport.emoji}</div>;
};

export default SportCircle;
