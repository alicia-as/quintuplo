export interface Sport {
  id: number;
  title: string;
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
}
