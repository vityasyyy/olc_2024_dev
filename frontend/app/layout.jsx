import localFont from "@next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const magicRetro = localFont({
  src: "../public/fonts/MagicRetro.ttf",
  variable: '--font-magicretro'
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "OmahTI Learning Center",
  description: "OmahTI Learning Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${magicRetro.variable}`}>{children}</body>
    </html>
  );
}
