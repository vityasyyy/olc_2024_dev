"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
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
import useUser from "@/hooks/useUser";

export default function NavbarButtons({ variant = "blue" }) {
  // check if user has logged in
  const [loading, loggedIn] = useUser();

  // logout function
  const onSubmitLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      if (response.status === 200) {
        localStorage.removeItem("token");
        location.reload();
      }
    } catch (error) {}
  };

  //   button conditional according to the variant and login status
  let buttons;
  if (loading) {
    if (variant === "white") {
      buttons = (
        <Button variant="outline" className="border-custom-blue-dark">
          <Skeleton className="h-6 w-12" />
        </Button>
      );
    } else {
      buttons = (
        <Button>
          <Skeleton className="h-6 w-16" />
        </Button>
      );
    }
  } else {
    if (loggedIn) {
      if (variant === "white") {
        // halaman olclass, logout
        buttons = (
          <Link href="/">
            <Button
              onClick={onSubmitLogout}
              variant="outline"
              className="border-custom-blue-dark text-custom-blue-dark hover:bg-custom-blue-dark/10"
            >
              Keluar
            </Button>
          </Link>
        );
      } else {
        // landing page, udah log in, dashboard
        buttons = (
          <>
            <Link href={`https://youtube.com`}>
              <Button className={`px-4`} variant="ghost">
                Guidebook
              </Button>
            </Link>
            <Link href="/olclass">
              <Button className={`px-4`}>Dashboard</Button>
            </Link>
          </>
        );
      }
    } else {
      if (variant === "blue") {
        // landing page, belom log in
        buttons = (
          <>
            <Link href="https://youtube.com">
              <Button className={`px-4`} variant="ghost">
                Guidebook
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline">Masuk</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Daftar</Button>
            </Link>
          </>
        );
      }
    }
  }
  return (
    <>
      {/* buttons */}
      <div
        className={`${variant === "white" && loggedIn ? "flex" : "hidden"} items-center space-x-4 sm:flex`}
      >
        {buttons}
      </div>

      {/* hamburger menu on mobile */}
      {variant === "blue" && (
        <Drawer direction="right" className="block sm:hidden">
          <DrawerTrigger className="block sm:hidden">
            <Menu className="text-custom-brown-light" />
          </DrawerTrigger>
          <DrawerContent
            noThumb
            className="ml-[10vw] flex h-full w-[90vw] flex-col items-center rounded-none rounded-l-[10px] border-none bg-custom-blue-dark py-12 text-custom-blue-dark"
          >
            <DrawerHeader>
              <DrawerTitle className="w-full text-center font-logo text-8xl text-white">
                olc
              </DrawerTitle>
              <DrawerDescription>
                <div className="flex w-full flex-col items-center gap-4 text-custom-blue-dark">
                  <p className={`mb-16 text-white`}>OmahTI Learning Center</p>
                  <Link href={`https://youtube.com`}>
                    <Button variant="ghost">Guidebook</Button>
                  </Link>
                  {loggedIn ? (
                    <Link href={`/olclass`} className={`w-full`}>
                      <Button className="w-full">Dashboard</Button>
                    </Link>
                  ) : (
                    <>
                      <Link href={`/auth/login`} className={`w-full`}>
                        <Button variant="outline" className="w-full">
                          Masuk
                        </Button>
                      </Link>
                      <Link href={`/auth/register`} className={`w-full`}>
                        <Button className="w-full">Daftar</Button>
                      </Link>
                    </>
                  )}
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="w-full">
              <DrawerClose className="flex justify-center">
                <CircleX className="h-8 w-8 text-white" />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
