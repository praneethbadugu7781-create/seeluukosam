import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
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
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF7F2] text-[#2D1115] font-sans selection:bg-[#F8D7DD] selection:text-[#5C1220] antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
