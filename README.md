# 🌹 Romantic Date Invitation — Personal Interactive Experience

A bespoke, studio-grade, mobile-first interactive website crafted as a personal digital love letter and surprise date invitation.

Built with **Next.js 14**, **React 18**, **Tailwind CSS**, **Framer Motion**, and **Canvas Confetti**.

---

## ✨ Features

- **Cinematic Multi-Screen Progression**:
  1. **The Mystery**: Minimalist luxury teaser with curiosity-building copy & *"OPEN IT"* interaction.
  2. **Personal Message**: Emotional line-by-line staggered text reveal.
  3. **The Big Question**: Editorial typography asking *“Will you go on a date with me? ❤️”*
     - **Intelligent Playful "Maybe" Button**: Moves away with spring physics on touch/click, changing funny remarks across 5+ stages without ever blocking screen text or overlapping the YES button.
     - **Dynamic YES Button**: Subtly scales and upgrades text with each dodge attempt.
     - **Celebration Burst**: Confetti explosion, glowing particles, and celebration chime when YES is tapped.
  4. **A Tiny Piece of Us (Memories)**: Polaroid memory carousel with sweet captions and graceful fallback art.
  5. **Our Date (Interactive Planner)**: Curated interactive date option cards (Sunset Date, Food + Conversations, Movie + Snacks, You Choose).
  6. **The Final Moment**: Emotional sign-off (*"— Praneeth ❤️"*), instant WhatsApp confirmation link, and downloadable `.ics` calendar invite.
- **Ambient Soundtrack Player**: Floating music pill with animated equalizer bars, supporting custom MP3 files and a built-in Web Audio romantic synthesized acoustic arpeggiator fallback.
- **Secret Easter Egg**: Discreet sparkling heart that reveals a cute secret note (*"P.S. I spent way too much time making this 😂"*).
- **Mobile-First Luxury Aesthetic**: Warm ivory backgrounds (`#FAF7F2`), deep wine accents (`#5C1220`), soft blush pink, subtle film grain texture, and typography with *Playfair Display* & *Plus Jakarta Sans*.

---

## 🛠️ Quick Start

### 1. Install & Run Dev Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your browser (or open via your phone connected to the same Wi-Fi).

### 2. Build for Production
```bash
npm run build
npm start
```

---

## 🎨 How to Customize (Everything in 1 File)

All text, names, photos, and date options are cleanly separated in:
👉 [`src/config/content.ts`](src/config/content.ts)

You can easily change:
- **`herName`**: Her name or nickname (e.g. `"My Love"`, `"Sarah"`, etc.)
- **`hisName` & `hisSignature`**: Set to `"Praneeth"` / `"— Praneeth ❤️"`
- **`whatsappNumber`**: Put your WhatsApp number with country code (e.g., `"919876543210"`) so the final button sends her chosen date directly to your chat!
- **`music.audioUrl`**: Place your favorite romantic mp3 inside `/public/audio/our-song.mp3`
- **`memories`**: Add your own favorite memories and photos in `/public/photos/`
- **`dateOptions`**: Add or modify date ideas

---

## 🚀 One-Click Deployment

You can deploy this in seconds to **Vercel**:
1. Push this repository to GitHub.
2. Import it into [Vercel](https://vercel.com).
3. Send the private link directly to her on WhatsApp! ❤️
