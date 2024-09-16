"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavbarLegacy({ className, loggedIn = false, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <div className="w-[90vw] mx-auto sm:w-full sm:px-6 flex h-16 items-center justify-between">

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
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={
                      item.label === "OLClass" || item.label === "Keluar"
                        ? ""
                        : "ghost"
                    }
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* hamburger button  */}
            <div className="flex sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

        {/* dropdown menu on mobile */}
        <div
          className={`sm:hidden ${
            isMenuOpen ? "block" : "hidden"
          } transition-all w-[90vw] mx-auto duration-300 ease-in-out`}
        >
          <div className="space-y-2 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md py-2 text-lg font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* spacer, acts like a margin */}
      <div className="h-16"></div>
    </>
  );
}
