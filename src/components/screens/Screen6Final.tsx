"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Calendar, RotateCcw, Heart, SunMedium, UtensilsCrossed, Film } from "lucide-react";
import { siteConfig } from "@/config/content";
import { DateOption } from "@/types";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface Screen6Props {
  selectedDate: DateOption | null;
  onRestart: () => void;
}

export function Screen6Final({ selectedDate, onRestart }: Screen6Props) {
  const { playChime } = useSoundEffect();

  const chosenDate = selectedDate || siteConfig.dateOptions[0];

  const handleWhatsAppSend = () => {
    playChime(700);
    const text = encodeURIComponent(
      `Hey ${siteConfig.hisName}! I said YES to our date ❤️✨\n\nI picked: "${chosenDate.title}"\n\nCan't wait! 🥹`
    );
    const phone = siteConfig.whatsappNumber ? siteConfig.whatsappNumber.replace(/[^0-9]/g, "") : "";
    const url = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
    window.open(url, "_blank");
  };

  const handleDownloadCalendar = () => {
    playChime(650);
    const eventTitle = siteConfig.screenFinal.calendarTitle;
    const eventDescription = `Date plan with Seeluu: ${chosenDate.title} - ${chosenDate.description}. ${siteConfig.screenFinal.promise2}`;
    
    const now = new Date();
    const eventDate = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
    const formatICSDate = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, "");

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Praneeth//Romantic Date Invitation//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription}`,
      `DTSTART:${formatICSDate(eventDate)}`,
      `DTEND:${formatICSDate(new Date(eventDate.getTime() + 3 * 3600 * 1000))}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "our-special-date.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderIcon = (iconKey: string) => {
    switch (iconKey) {
      case "sunset":
        return <SunMedium className="w-5 h-5 text-gold-600" />;
      case "coffee":
      case "food":
        return <UtensilsCrossed className="w-5 h-5 text-gold-600" />;
      case "film":
      case "movie":
        return <Film className="w-5 h-5 text-gold-600" />;
      case "sparkles":
      default:
        return <Sparkles className="w-5 h-5 text-gold-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-md mx-auto px-4 py-8 text-center"
    >
      {/* Delicate floating badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mb-6 p-4 rounded-full bg-gradient-to-tr from-blush-100 via-peach-50 to-rose-100 border border-wine-200/50 shadow-luxury-sm"
      >
        <Sparkles className="w-7 h-7 text-gold-500 animate-pulse-slow" />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="font-brand text-4xl sm:text-5xl font-normal text-wine-950 tracking-wide mb-4 leading-tight"
      >
        {siteConfig.screenFinal.title}
      </motion.h1>

      {/* Chosen Date Summary Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="w-full bg-ivory-50/95 rounded-3xl p-4 border border-wine-200/60 shadow-luxury-sm mb-6 flex items-center justify-center gap-3.5"
      >
        <div className="p-2 rounded-xl bg-peach-50 border border-wine-100">
          {renderIcon(chosenDate.icon)}
        </div>
        <div className="text-left">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-600">Selected Adventure</p>
          <p className="font-brand text-base font-normal text-wine-950">{chosenDate.title}</p>
        </div>
      </motion.div>

      {/* Promises */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="space-y-2 mb-6"
      >
        <p className="font-serif text-lg sm:text-xl text-wine-900/80 font-normal">
          {siteConfig.screenFinal.promise1}
        </p>
        <p className="font-serif text-lg sm:text-xl text-wine-900/95 font-medium italic">
          {siteConfig.screenFinal.promise2}
        </p>
      </motion.div>

      {/* Gratitude & Signature */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
        className="mb-8"
      >
        <p className="font-sans text-xs sm:text-sm text-wine-800/70 mb-2 tracking-wide">
          {siteConfig.screenFinal.gratitude}
        </p>
        <p className="font-script text-4xl sm:text-5xl text-wine-800 tracking-wide mt-2">
          {siteConfig.screenFinal.signature}
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="w-full space-y-3"
      >
        {/* WhatsApp Send Confirmation */}
        <motion.button
          onClick={handleWhatsAppSend}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-gradient-to-r from-wine-900 via-wine-800 to-wine-900 text-ivory-50 font-sans text-xs font-semibold tracking-widest uppercase shadow-luxury-lg hover:shadow-glow-wine transition-all border border-wine-700/60"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send Confirmation to {siteConfig.hisName}</span>
        </motion.button>

        {/* Add to Calendar */}
        <motion.button
          onClick={handleDownloadCalendar}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-ivory-50/90 hover:bg-wine-50 text-wine-900/90 border border-wine-200/60 font-sans text-xs font-medium tracking-wider uppercase shadow-luxury-sm transition-all"
        >
          <Calendar className="w-3.5 h-3.5 text-wine-700" />
          <span>Save Date to Calendar (.ics)</span>
        </motion.button>
      </motion.div>

      {/* Replay Option */}
      <motion.button
        onClick={() => {
          playChime(400);
          onRestart();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-8 flex items-center gap-1.5 text-xs text-wine-800/40 hover:text-wine-800 transition-colors tracking-wide font-sans"
      >
        <RotateCcw className="w-3 h-3" />
        <span>Replay Experience</span>
      </motion.button>
    </motion.div>
  );
}
