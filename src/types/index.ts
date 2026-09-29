export interface MemoryItem {
  id: string;
  image: string;
  caption: string;
  tag?: string;
  alt: string;
}

export interface LoveLetterConfig {
  herFormalName: string; // Sarvani
  herNickname: string;   // Seeluu / Seeluuu
  hisName: string;       // Praneeth
  hisSignature: string;  // — Praneeth ❤️

  music: {
    title: string;
    artist: string;
    audioUrl?: string;
  };

  opening: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3Main: string;
    line4: string;
    line5Climax: string;
    scrollPrompt: string;
  };

  chapter01: {
    number: string;
    title: string;
    heading: string;
    subheading: string;
    spacedLines: string[];
    bridge: string;
    realization1: string;
    realization2: string;
  };

  chapter02: {
    number: string;
    title: string;
    heading: string;
    cards: string[];
  };

  chapter03: {
    number: string;
    title: string;
    statement: string;
    bridge: string;
    punchline: string;
  };

  chapter04: {
    number: string;
    title: string;
    line1: string;
    line2: string;
    line3: string;
    climax: string;
  };

  memories: {
    number: string;
    title: string;
    subtitle: string;
    items: MemoryItem[];
  };

  chapter05: {
    number: string;
    title: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    climax: string;
  };

  longTermFeeling: {
    line1: string;
    line2: string;
    line3: string;
    climax: string;
    gratitude: string;
  };

  finalChapter: {
    prompt: string;
    wordYes: string;
    statement: string;
    climax: string;
  };

  finalMessage: {
    line1: string;
    line2: string;
    line3: string;
    signature: string;
    footnote: string;
  };

  easterEgg: {
    line1: string;
    line2: string;
  };
}
