'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar({ className, loggedIn = false, scrollToAbout, ...props }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = loggedIn
    ? [{ href: "/logout", label: "Keluar" }]
    : [
        { href: "/about", label: "About Us" },
        { href: "/class", label: "OLClass" },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/75 backdrop-blur-[8px]" : "bg-white"
        } ${className}`}
        {...props}
      >
        <div className="mx-auto flex h-16 w-[90vw] items-center justify-between sm:w-full sm:px-6">
          {/* logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                className="h-8 w-auto"
                src="/placeholder.svg"
                alt="Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>

          {/* buttons */}
          <div className="hidden sm:block">
            <div className="flex items-baseline space-x-4">
              <Button onCLick={scrollToAbout} variant="ghost">
                About Us
              </Button>
              <Button aschild>
                <Link href="/class">OLClass</Link>
              </Button>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex sm:hidden" asChild>
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-6 block w-48 sm:hidden">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuItem>OLClass</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* spacer, acts like a margin */}
      <div className="h-16"></div>
    </>
  );
}
