export type DestinationId =
  | "beginning"
  | "littleThings"
  | "secrets"
  | "orbit"
  | "memories"
  | "oneThing";

export type ExperiencePhase =
  | "opening"
  | "entering"
  | "explore"
  | "destination"
  | "oneThing"
  | "reveal"
  | "thanks";

export interface MemoryItem {
  id: string;
  photoURL: string;
  caption: string;
  date?: string;
  alt: string;
}

export interface UniverseConfig {
  herName: string;
  myName: string;

  openingText: string[];

  constellationMessages: string[];
  littleThings: string[];
  littleThingsFinale: string[];
  secrets: string[];
  secretsFinale: string;
  orbitMessages: string[];

  memories: MemoryItem[];
  photoURLs: string[];
  photoCaptions: string[];

  musicURL: string;
  musicTitle: string;

  oneThingMessages: string[];
  revealMessages: string[];
  finalMessage: string;
  thanksMessages: string[];
  signature: string;

  easterEggs: { id: string; lines: string[] }[];
}
