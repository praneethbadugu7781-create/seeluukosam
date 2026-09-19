export interface DateOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  accent: string;
  details?: string;
}

export interface MemoryItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  image?: string;
  placeholderEmoji?: string;
}

export interface SiteConfig {
  herName: string;
  hisName: string;
  hisSignature: string;
  whatsappNumber?: string;
  music: {
    title: string;
    artist: string;
    audioUrl?: string; // Optional custom audio file path in /public
  };
  screen1: {
    greeting: string;
    subtitle: string;
    disclaimer: string;
    ctaText: string;
  };
  screen2: {
    title: string;
    lines: string[];
    climax: string;
    ctaText: string;
  };
  screen3: {
    prepTitle: string;
    question: string;
    subtext: string;
    yesInitialText: string;
    maybeSequence: string[];
    yesEvolution: string[];
    unlockedHeading: string;
    unlockedBadge: string;
    unlockedSubtext: string;
    unlockedCta: string;
  };
  enableMemoriesSection: boolean;
  memories: MemoryItem[];
  dateOptions: DateOption[];
  screen5: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  screenFinal: {
    title: string;
    promise1: string;
    promise2: string;
    gratitude: string;
    signature: string;
    calendarTitle: string;
    calendarDescription: string;
  };
  easterEgg: {
    heading: string;
    body: string;
    subtext: string;
  };
}
