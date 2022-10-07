import { Person } from "./person";

export interface Sport {
  id: number;
  title: string;
<<<<<<< HEAD
  target: string;
  emoji: string;
  marketing: null;
  participants: Person[];
=======
  target: Target;
  emoji: string;
  marketing: null;
  likelihood: number;
  isFinalOnly?: boolean;
}

export interface Target {
  easy: string;
  medium?: string;
  hard?: string;
>>>>>>> 626ef62b5983bba86ca11f0c3b1736658f95e8d9
}
