import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const magicRetro = localFont({
  src: "../public/fonts/MagicRetro.ttf",
  variable: "--font-magicretro",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "OmahTI Learning Center",
  description: "OmahTI Learning Center",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/favicon-light.ico",
        href: "/icons/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/favicon-dark.ico",
        href: "/icons/favicon-dark.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${magicRetro.variable} bg-white`}>
        {children}
      </body>
    </html>
  );
}
