import { LoveLetterConfig } from "@/types";

/**
 * =======================================================================
 * DIGITAL LOVE LETTER CONFIGURATION — FOR SARVANI (SEELUU) ❤️
 * =======================================================================
 * A cinematic, deeply emotional private love letter experience.
 * All texts, memories, captions, and music settings can be customized here.
 */
export const loveLetterConfig: LoveLetterConfig = {
  herFormalName: "Sarvani",
  herNickname: "Seeluu",
  hisName: "Praneeth",
  hisSignature: "— Praneeth ❤️",

  music: {
    title: "Our Song",
    artist: "Acoustic Melody",
    audioUrl: "/audio/our-song.mp3",
  },

  // 04 — OPENING SCREEN
  opening: {
    eyebrow: "A little something I wanted you to know.",
    line1: "I don't know exactly when it happened…",
    line2: "but somewhere between all our conversations,",
    line3Main: "I started loving you a little more every day.",
    line4: "And somehow…",
    line5Climax: "a little more became everything. ❤️",
    scrollPrompt: "scroll slowly ↓",
  },

  // 06 — CHAPTER 01: “It happened quietly.”
  chapter01: {
    number: "01",
    title: "It happened quietly.",
    heading: "I didn't fall for you all at once.",
    subheading: "It happened quietly.",
    spacedLines: [
      "A conversation here.",
      "A smile there.",
      "A memory I didn't want to forget.",
      "Another moment I wanted to keep.",
    ],
    bridge: "Until one day I realized…",
    realization1: "I wasn't just getting attached to you.",
    realization2: "I was falling in love with you.",
  },

  // 07 — CHAPTER 02: “It's the little things.”
  chapter02: {
    number: "02",
    title: "It's the little things.",
    heading: "You probably don't even realize how many little things I love about you, Seeluu.",
    cards: [
      "The way you talk.",
      "The little things you say.",
      "The random conversations.",
      "The moments that somehow stay in my head.",
      "The way a simple message from you can change my entire mood.",
    ],
  },

  // 08 — CHAPTER 03: “Every day, a little more.”
  chapter03: {
    number: "03",
    title: "Every day, a little more.",
    statement: "Every day I find another reason to love you.",
    bridge: "And the funny thing is…",
    punchline: "You don't even have to try.",
  },

  // 09 — CHAPTER 04: “If you could see my thoughts…”
  chapter04: {
    number: "04",
    title: "If you could see my thoughts…",
    line1: "Maybe I don't say it enough.",
    line2: "Maybe sometimes I don't know how to put it into words.",
    line3: "But if you could somehow see my thoughts…",
    climax: "you'd find your name there more often than you'd expect. ❤️",
  },

  // 10 — PERSONAL MEMORIES: “Things I don't want to forget.”
  memories: {
    number: "05",
    title: "Things I don't want to forget.",
    subtitle: "A few moments etched into my heart forever.",
    items: [
      {
        id: "mem-1",
        image: "/photos/memory1.jpg",
        caption: "One of those moments I wish I could replay.",
        tag: "Memory 01",
        alt: "Sarvani smiling",
      },
      {
        id: "mem-2",
        image: "/photos/memory2.jpg",
        caption: "You probably don't remember this one.",
        tag: "Memory 02",
        alt: "Sarvani in traditional elegance",
      },
      {
        id: "mem-3",
        image: "/photos/memory3.jpg",
        caption: "But I do.",
        tag: "Memory 03",
        alt: "Praneeth and Sarvani together",
      },
    ],
  },

  // 11 — CHAPTER 05: “You matter to me.”
  chapter05: {
    number: "06",
    title: "You matter to me.",
    line1: "You don't have to do anything special to be special to me.",
    line2: "Your presence is enough.",
    line3: "Talking to you is enough.",
    line4: "Knowing you're there is enough.",
    climax: "You are enough.",
  },

  // 12 — THE LONG-TERM FEELING
  longTermFeeling: {
    line1: "And if I'm being completely honest…",
    line2: "I don't know what the future looks like.",
    line3: "I don't know where life will take us.",
    climax: "But I know meeting you made my world a little more beautiful.",
    gratitude: "And I'm grateful for that.",
  },

  // 13 — FINAL CHAPTER
  finalChapter: {
    prompt: "So if you ever wondered…",
    wordYes: "Yes.",
    statement: "You matter to me.",
    climax: "More than I probably know how to say. ❤️",
  },

  // 14 — FINAL MESSAGE
  finalMessage: {
    line1: "And if loving you means finding a new reason to smile every day…",
    line2: "I hope I get to keep discovering those reasons…",
    line3: "for a very, very long time.",
    signature: "— Praneeth ❤️",
    footnote: "That's all I wanted you to know.",
  },

  // 17 — HIDDEN DETAIL
  easterEgg: {
    line1: "P.S. I spent way too much time making this.",
    line2: "But somehow, it still doesn't feel like enough. ❤️",
  },
};
