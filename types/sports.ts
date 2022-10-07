import { Person } from "./person";

export interface Sport {
  id: number;
  title: string;
  target: string;
  emoji: string;
  marketing: null;
  participants: Person[];
}
