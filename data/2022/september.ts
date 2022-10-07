import { Sport } from "./../../types/sports";
import { Person } from "../../types/person";
import Participans from "../participants";

export const sports = [
  {
    id: 1,
    title: "Løping",
    target: "5000 m",
    emoji: "🏃",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Jokke,
      Participans.Drønk,
      Participans.Nussegnageren,
      Participans.Bønna,
    ],
  },
  {
    id: 2,
    title: "Styrketrening",
    target: "300 kcal",
    emoji: "🏋️‍♀️",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Jokke,
      Participans.Drønk,
      Participans.Nussegnageren,
      Participans.Bønna,
    ],
  },
  {
    id: 3,
    title: "Squash",
    target: "400 kcal",
    emoji: "🥒",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Jokke,
      Participans.Drønk,
      Participans.Nussegnageren,
      Participans.Bønna,
    ],
  },
  {
    id: 4,
    title: "Svømming",
    target: "1000 m",
    emoji: "🏊‍♀️",
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
    title: "Minigolf",
    target: "18 hull",
    emoji: "🏌️",
    marketing: null,
    participants: [
      Participans.Mis,
      Participans.Jokke,
      Participans.Drønk,
      Participans.Bønna,
    ],
  },
];
