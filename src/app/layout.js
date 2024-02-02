import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import localFont from "next/font/local";
const crkFont = localFont({
  src: "../assets/fonts/CookieRunRegular.ttf",
  variable: "--font-crk",
});

export const metadata = {
  title: "Cookie Guide Kingdom",
  description: "Guide website for Cookie Run Kingdom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${crkFont.variable} font-sans`}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    </html>
  );
}
