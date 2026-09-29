import type { Metadata, Viewport } from "next";
import { Italiana, Cormorant_Garamond, Outfit, Alex_Brush, Playfair_Display } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAF7F2",
};

export const metadata: Metadata = {
  title: "For Sarvani ❤️ | Loving You More Every Day",
  description: "A private digital love letter from Praneeth to Sarvani (Seeluu).",
  openGraph: {
    title: "For Sarvani ❤️",
    description: "A little something I wanted you to know.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${cormorant.variable} ${outfit.variable} ${alexBrush.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF7F2] text-[#24060C] font-sans selection:bg-[#F8D7DD] selection:text-[#5C1220] antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
