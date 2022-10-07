import { Person } from "../types/person";

const Completionists = ({ completionists }: { completionists: Person[] }) => {
  return (
    <div>
      {completionists.map((completionist) => (
        <div>{completionist.nickname}</div>
      ))}
    </div>
  );
};

export default Completionists;
