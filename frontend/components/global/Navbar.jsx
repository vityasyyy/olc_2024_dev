import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";

export default function Navbar({ className, loggedIn = false, ...props }) {
  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 ${loggedIn ? "border-b-[1.5px] border-custom-blue-dark bg-white/75" : "bg-custom-blue-dark/75"} backdrop-blur-[8px] ${className}`}
        {...props}
      >
        <div className="mx-auto flex h-16 w-[90vw] items-center justify-between sm:w-full sm:px-6">
          {/* logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`font-logo flex-shrink-0 text-3xl ${loggedIn ? "text-custom-blue-dark" : "text-white"}`}
            >
              olc
            </Link>
          </div>

          {/* buttons */}
          <div>
            <div className="flex items-baseline space-x-4">
              {loggedIn ? (
                <Link href="/">
                  <Button>Keluar</Button>
                </Link>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="outline">Masuk</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button>Daftar</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* spacer, acts like a margin */}
      <div className={`h-16 ${loggedIn ? "" : "bg-custom-blue-dark"} `}></div>
    </>
  );
}
