import { Sport } from "./../../types/sports";
import { Person } from "../../types/person";
import Participans from "../participants";

export const sports = [
  {
    id: 1,
    title: "Styrketrening",
    target: "300 kcal",
    emoji: "🏋️‍♀️",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Jokke,
      Participans.Drønk,
      Participans.Nussegnageren,
    ],
  },
  {
    id: 2,
    title: "Klatring",
    target: "400 kcal",
    emoji: "🧗🏼‍♀️",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Drønk,
      Participans.Nussegnageren,
    ],
  },
  {
    id: 3,
    title: "Tennis",
    target: "400 kcal",
    emoji: "🎾",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Drønk,
      Participans.Nussegnageren,
    ],
  },
  {
    id: 4,
    title: "Frisbeegolf",
    target: "12 hull",
    emoji: "🥏",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Jokke,
      Participans.Drønk,
      Participans.Nussegnageren,
    ],
  },
  {
    id: 5,
    title: "Shuffleboard",
    target: "18 hull",
    emoji: "🥌",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Jokke,
      Participans.Drønk,
      Participans.Nussegnageren,
    ],
  },
];
