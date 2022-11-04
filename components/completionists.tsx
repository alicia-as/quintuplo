import { Person } from "../types/person";

const Completionists = ({
  completionists,
  month,
}: {
  completionists: Person[];
  month: string;
}) => {
  return (
    <div>
      <h3 className="text-gray-400">Finished {month}'s quintuplo</h3>
      {completionists.map((completionist) => (
        <div>{`${completionist.nickname} 🏆`}</div>
      ))}
    </div>
  );
};

export default Completionists;
