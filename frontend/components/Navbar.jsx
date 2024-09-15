import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, School, BookA } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

export default function Navbar({ className, ...props }) {
  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex bg-white/75 p-4 backdrop-blur-[8px] ${className}`}
        {...props}
      >
        {/* logo */}
        <Image
          className="h-9 w-9"
          src="/placeholder.svg"
          alt="Logo"
          height={32}
          width={32}
        />

        {/* buttons go here */}
        <div className="ml-auto hidden gap-2 sm:flex">
          <Button variant="ghost" asChild>
            <Link href="/about">About Us</Link>
          </Button>

          <Button asChild>
            <Link href="/olclass">OLClass</Link>
          </Button>
        </div>

        {/* mobile dropdown menu, using shadcn */}
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="ml-auto inline-block sm:hidden"
          >
            <Button variant="ghost">
              <Menu className="h-9 w-9" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4 w-56">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="about">
                  <BookA className="mr-2 h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/olclass">
                  <School className="mr-2 h-4 w-4" />
                  <span>OLClass</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* spacer, acts like a margin */}
      <div className="h-16"></div>
    </>
  );
}
