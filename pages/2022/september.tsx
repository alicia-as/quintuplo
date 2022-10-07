import Completionists from "../../components/completionists";
import { sports } from "../../data/2022/september";
import { Person } from "../../types/person";

// const didCompleteQuintuplo = (participants: Person[], sports: Sport[]) => {
//   sports.reduce((sport, acc) => {
//     sport.part
//   }, {});
// };

const History = () => {
  return (
    <>
      <h1>September 2022</h1>
      <div className="w-full h-full grid grid-cols-2">
        <div className="w-full h-full flex flex-col">
          {sports.map((sport) => (
            <div className="card w-3/12 center-self my-3 ">
              <span className="p-3 font-semibold text-lg">{sport.title}</span>
              <div className="p-3 flex flex-col">
                
                {sport.participants.map((participant) => (
                  <span>
                    {`${participant.firstName} "${participant.nickname}"
                ${participant.lastName}`}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="justify-center content-center">
          <Completionists completionists={sports[0].participants} />
        </div>
      </div>
    </>
  );
};

export default History;
