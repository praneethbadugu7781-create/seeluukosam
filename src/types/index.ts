export interface MemoryItem {
  id: string;
  image: string;
  caption: string;
  tag?: string;
  alt: string;
}

export interface LoveLetterConfig {
  herFormalName: string; // Sarvani
  herNickname: string;   // Seeluu
  hisName: string;       // Praneeth
  hisSignature: string;  // — Praneeth

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
    items: MemoryItem[];
  };

  chapter06Forever: {
    number: string;
    intro: string;
    promise: string;
    list: string[];
    withYou: string;
    mainClimax: string;
    notJust1: string;
    notJust2: string;
    notJust3: string;
  };

  futureSection: {
    line1: string;
    chooseBridge: string;
    centerpiece: string;
    notBecause: string;
    besideMe: string;
    finalEmphasis: string;
  };

  finalScreen: {
    doubt: string;
    howMuch: string;
    words1: string;
    words2: string;
    iLoveYou: string;
    pauseToday: string;
    pauseTomorrow: string;
    pauseEveryTomorrow: string;
    signature: string;
  };

  easterEgg: {
    line1: string;
    line2: string;
  };
}
