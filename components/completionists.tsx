import { Person } from "../types/person";

const Completionists = ({ completionists }: { completionists: Person[] }) => {
  return (
    <div>
      <h3 className="text-gray-400">Finished September's quintuplo</h3>
      {completionists.map((completionist) => (
        <div>{`${completionist.nickname} 🏆`}</div>
      ))}
    </div>
  );
};

export default Completionists;
