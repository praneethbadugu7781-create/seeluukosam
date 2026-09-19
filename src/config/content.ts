import { SiteConfig } from "@/types";

/**
 * =======================================================================
 * ROMANTIC DATE INVITATION CONFIGURATION
 * =======================================================================
 * Customized for Seeluu & Praneeth ❤️
 */
export const siteConfig: SiteConfig = {
  // Her Name
  herName: "Seeluu",

  // Your name and signature
  hisName: "Praneeth",
  hisSignature: "— Praneeth ❤️",

  // WhatsApp Confirmation Number
  whatsappNumber: "917330820239",

  // Background Music configuration
  music: {
    title: "Our Song",
    artist: "Acoustic Melody",
    audioUrl: "/audio/our-song.mp3",
  },

  // Screen 1: The Mystery Opening
  screen1: {
    greeting: "Hey Seeluu… ❤️",
    subtitle: "I made something special just for you.",
    disclaimer: "Please don't judge me until you reach the end. 🫣",
    ctaText: "OPEN IT",
  },

  // Screen 2: The Personal Message
  screen2: {
    title: "I could've just texted you…",
    lines: [
      "But somehow…",
      "I didn't want to.",
      "Because this felt like something…",
      "that deserved a little more effort.",
    ],
    climax: "So I made you this, Seeluu. ❤️",
    ctaText: "Continue",
  },

  // Screen 3: The Big Question
  screen3: {
    prepTitle: "Okay… I have one question for you",
    question: "Will you go on a date with me?",
    subtext: "Just you + me + a little bit of happiness. ❤️",
    yesInitialText: "YES, I WILL ❤️",
    maybeSequence: [
      "Maybe… 👀",
      "Are you sure, Seeluu? 😂",
      "Nice try 😌",
      "You know you want to ❤️",
      "Okay okay… just say YES 🥹",
      "Resistance is impossible 🙈",
      "Still trying? 😂❤️",
      "Come on, say yes! 💖",
    ],
    yesEvolution: [
      "YES, I WILL ❤️",
      "YESSS ❤️",
      "YES PLEASE 🥹❤️",
      "ABSOLUTELY YES! 💖",
      "1000x YES! ✨",
    ],
    unlockedHeading: "I KNEW ITTT! 🥹❤️",
    unlockedBadge: "Date officially unlocked. 🔓",
    unlockedSubtext: "Now let's plan our little adventure…",
    unlockedCta: "LET'S PLAN IT →",
  },

  // Memories Section (Using your 3 uploaded photos!)
  enableMemoriesSection: true,
  memories: [
    {
      id: "mem-1",
      title: "One of my favorite memories.",
      description: "The way you laugh without holding back is genuinely my favorite sound in the world.",
      tag: "Chapter 01",
      image: "/photos/memory1.jpg",
      placeholderEmoji: "🌸",
    },
    {
      id: "mem-2",
      title: "Still makes me smile.",
      description: "Every unexpected joke, sweet glance, and late-night conversation we've shared.",
      tag: "Chapter 02",
      image: "/photos/memory2.jpg",
      placeholderEmoji: "✨",
    },
    {
      id: "mem-3",
      title: "And somehow… here we are.",
      description: "And every single day, I find myself looking forward to whatever comes next with you.",
      tag: "Chapter 03",
      image: "/photos/memory3.jpg",
      placeholderEmoji: "💫",
    },
  ],

  // Screen 4: Date Options (With Kaju Burfi Date!)
  dateOptions: [
    {
      id: "kaju-burfi",
      icon: "sweet",
      title: "Kaju Burfi Date ✨",
      description: "Boxes of your favorite Kaju Burfi, sweet smiles & pure happiness.",
      accent: "from-amber-400/25 via-rose-400/15 to-transparent",
      details: "Eating delicious Kaju Burfi together while talking about everything and losing track of time.",
    },
    {
      id: "food-convos",
      icon: "coffee",
      title: "Food + Long Conversations",
      description: "Because somehow we always have more to talk about.",
      accent: "from-orange-500/20 via-red-500/15 to-transparent",
      details: "An intimate cafe table, delicious plates, and endless stories.",
    },
    {
      id: "movie-snacks",
      icon: "film",
      title: "Movie & Cozy Treats",
      description: "Cuddled up, snacks in hand, zero responsibilities.",
      accent: "from-purple-500/20 via-pink-500/15 to-transparent",
      details: "Dim cozy lighting, endless treats, and watching our favorite film together.",
    },
    {
      id: "you-choose",
      icon: "sparkles",
      title: "You Choose (My Treat)",
      description: "Pick wherever your heart desires — I'm 100% all in.",
      accent: "from-amber-400/25 via-yellow-500/15 to-transparent",
      details: "Pick whatever crazy or cozy idea is on your mind — I'm ready.",
    },
  ],

  // Screen 5 Header for Date Planning
  screen5: {
    title: "So… what kind of date are we having?",
    subtitle: "Select your favorite vibe (or pick 'You Choose' to surprise me)",
    ctaText: "Lock It In ❤️",
  },

  // Final Screen
  screenFinal: {
    title: "Then it's a date. ❤️",
    promise1: "You bring yourself.",
    promise2: "I'll take care of the rest.",
    gratitude: "Thank you for saying yes, Seeluu.",
    signature: "— Praneeth ❤️",
    calendarTitle: "Kaju Burfi & Romantic Date with Seeluu & Praneeth ❤️",
    calendarDescription: "A sweet romantic date just for the two of us!",
  },

  // Hidden Easter Egg
  easterEgg: {
    heading: "A Little Secret...",
    body: "P.S. I spent way too much time making this for you, Seeluu! 😂❤️",
    subtext: "So please appreciate the effort!",
  },
};
