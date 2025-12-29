import Navbar from "@/components/Global/Navbar";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200","400", "500","600", "700","800","900"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "The Ramjan Show",
  description: "",
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
