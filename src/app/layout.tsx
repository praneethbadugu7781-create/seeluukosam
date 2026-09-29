import type { Metadata, Viewport } from "next";
import { Manrope, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAF8F5",
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
      className={`${manrope.variable} ${bodoni.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF8F5] text-[#241719] font-sans antialiased overflow-x-hidden min-h-screen selection:bg-[#F3E3E3] selection:text-[#A94B58]">
        {children}
      </body>
    </html>
  );
}
