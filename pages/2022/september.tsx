import Completionists from "../../components/completionists";
import { sports } from "../../data/2022/september";
import Participants from "../../data/participants";
import { Person } from "../../types/person";
import { Sport } from "../../types/sports";

const getFinishers = (participants: Person[], sports: any[]) => {
  return [Participants.Mis, Participants.Jokke, Participants.Drønk];
};

const History = () => {
  return (
    <section className="p-4">
      <h1 className="text-center pb-10">September 2022</h1>
      <div className="w-full h-full grid grid-cols-2 gap-20">
        <div className="w-full h-full flex flex-col items-end">
          {sports.map((sport) => (
            <div className="card w-7/12 center-self my-3 ">
              <span className="p-3 font-semibold text-lg">
                {`${sport.title} ${sport.emoji}`}
              </span>
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
          <Completionists completionists={getFinishers(Participants, sports)} />
        </div>
      </div>
    </section>
  );
};

export default History;
