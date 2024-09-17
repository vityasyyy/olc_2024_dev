import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";

export default function Navbar({
  className,
  loggedIn = false,
  ...props
}) {

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50
          ${loggedIn ? 'bg-white/75 border-b-[1.5px] border-custom-blue-dark' : 'bg-custom-blue-dark/75'} backdrop-blur-[8px] ${className}`}
        {...props}
      >
        <div className="mx-auto flex h-16 w-[90vw] items-center justify-between sm:w-full sm:px-6">
          {/* logo */}
          <div className="flex items-center">
            <Link href="/" className={`flex-shrink-0 font-logo text-3xl ${loggedIn ? 'text-custom-blue-dark' : 'text-white'}`}>
            olc
            </Link>
          </div>

          {/* buttons */}
          <div>
            <div className="flex items-baseline space-x-4">
              {loggedIn ? (
                <Button variant="outline" asChild className="font-semibold border-custom-blue-darker border-[1.5px] px-8 text-custom-black">
                  <Link href="/">Keluar</Link>
                </Button>
              ) : (
                <>
                  <Button variant="outline" aschild className="font-semibold px-8 text-custom-brown-light bg-transparent border-custom-brown-light hover:bg-custom-brown-light/20 hover:text-custom-brown-light">
                    <Link href="/auth/login">Masuk</Link>
                  </Button>
                  <Button aschild className="bg-custom-brown-light font-semibold text-custom-black px-8 hover:bg-custom-brown-light/80">
                    <Link href="/auth/register">Daftar</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* spacer, acts like a margin */}
      <div className={`h-16 ${loggedIn ? '' : 'bg-custom-blue-dark'} `}></div>
    </>
  );
}
