import Navbar from "@/components/Global/Navbar";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200","400", "500","600", "700","800","900"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "The Ramjan Show - Deep Conversations With Visionaries",
  description: "Deep Conversations With Visionaries, Rebels, And Change-Makers. Weekly Episodes That Challenge Perspective And Ignite Curiosity.",
  keywords: "The Ramjan Show, podcast, interviews, visionaries, rebels, change-makers, deep conversations",
  authors: [{ name: "The Ramjan Show" }],
  openGraph: {
    title: "The Ramjan Show - Deep Conversations With Visionaries",
    description: "Deep Conversations With Visionaries, Rebels, And Change-Makers. Weekly Episodes That Challenge Perspective And Ignite Curiosity.",
    type: "website",
    locale: "en_US",
    siteName: "The Ramjan Show",
    images: [
      {
        url: "/trs-preview.png",
        width: 1200,
        height: 630,
        alt: "The Ramjan Show Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ramjan Show - Deep Conversations With Visionaries",
    description: "Deep Conversations With Visionaries, Rebels, And Change-Makers. Weekly Episodes That Challenge Perspective And Ignite Curiosity.",
    images: ["/trs-preview.png"],
  },
  icons: {
    icon: "/fav2.png",
    shortcut: "/fav2.png",
    apple: "/fav2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
