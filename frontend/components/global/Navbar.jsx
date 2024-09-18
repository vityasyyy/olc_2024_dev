"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleX } from "lucide-react";
import axios from "axios";
export default function Navbar({ className, loggedIn = true, ...props }) {

  const onSubmitLogout = async () => {
    try{
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {}, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
      if(response.status === 200) {
        localStorage.removeItem('token');
      }
    } catch (error) {
      
    }
  }
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
              className={`flex-shrink-0 font-logo text-3xl ${loggedIn ? "text-custom-blue-dark" : "text-white"}`}
            >
              olc
            </Link>
          </div>

          {/* buttons */}
          <div className="hidden items-baseline space-x-4 sm:flex">
            {loggedIn ? (
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-custom-blue-dark text-custom-blue-dark"
                >
                  Keluar
                </Button>
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

          {/* hamburger menu on mobile */}
          <Drawer direction="right" className="block sm:hidden">
            <DrawerTrigger className="block sm:hidden">
              <Menu className="text-custom-brown-light" />
            </DrawerTrigger>
            <DrawerContent
              noThumb
              className="ml-[10vw] h-full w-[90vw] flex flex-col items-center rounded-none rounded-l-[10px] py-12 text-custom-blue-dark"
            >
              <DrawerHeader>
                <DrawerTitle className="w-full font-logo text-7xl text-center text-custom-blue-dark">
                  OLC
                </DrawerTitle>
                <DrawerDescription>
                  <div className="w-full flex flex-col items-center gap-4 text-custom-blue-dark">
                    <p>OmahTI Learning Center</p>
                    <Button variant="outline" className="w-full mt-16">Masuk</Button>
                    <Button className="w-full">Daftar</Button>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="w-full">
                <DrawerClose className="flex justify-center">
                  <CircleX className="text-custom-blue-dark h-8 w-8" />
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>

      {/* spacer, acts like a margin */}
      <div className={`h-16 ${loggedIn ? "" : "bg-custom-blue-dark"} `}></div>
    </>
  );
}
