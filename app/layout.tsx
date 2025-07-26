import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "../redux/provider";
import { Setup } from "./utils";
import { Analytics } from "@vercel/analytics/next";
import AlertUser from "./utils/alert/alert";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "UNSZA",
  description: "Universidad Nacional Salvador Zubirán Anchondo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <AlertUser />
          <Setup />
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
