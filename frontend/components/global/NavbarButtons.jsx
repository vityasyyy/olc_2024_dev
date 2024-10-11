"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CircleX } from "lucide-react";
import axios from "axios";
import useUser from "@/hooks/useUser";
import Image from "next/image";

export default function NavbarButtons({ variant = "blue" }) {
  // check if user has logged in
  const [loading, loggedIn] = useUser();
  const Router = useRouter();

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
        Router.push("/");
      }
    } catch (error) {}
  };

  //   button conditional according to the variant and login status
  let buttons;
  if (loading) {
    if (variant === "white") {
      buttons = (
        <Button variant="outline" className="border-custom-blue-dark">
          <Skeleton className="h-4 w-12" />
        </Button>
      );
    } else {
      buttons = (
        <>
          <Button variant={`outline`}>
            <Skeleton className="h-4 w-12" />
          </Button>
          <Button>
            <Skeleton className="h-4 w-12" />
          </Button>
        </>
      );
    }
  } else {
    if (loggedIn) {
      if (variant === "white") {
        // halaman olclass, logout
        buttons = (
          <>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant={`outline`}
                  className={`border-custom-blue-dark px-6 text-custom-blue-dark hover:bg-custom-blue-dark/10`}
                >
                  <LogOut className={`mr-1 h-4`} />
                  Keluar
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to log out? You will need to log in
                    again to access your account.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    className={`border-custom-blue-dark text-custom-blue-dark hover:bg-custom-blue-dark/10`}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onSubmitLogout}
                    className={`bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90`}
                  >
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        );
      } else {
        // landing page, udah log in, dashboard
        buttons = (
          <>
            <Link href={`https://youtube.com`} target={`_blank`}>
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
        <Drawer direction="right" className="relative block max-w-sm sm:hidden">
          <DrawerTrigger className="block sm:hidden">
            <Menu className="text-custom-brown-light" />
          </DrawerTrigger>
          <DrawerContent
            noThumb
            className="ml-[30vw] flex h-full w-[70vw] flex-col items-center rounded-none rounded-l-[10px] border-none bg-custom-blue-dark py-12 text-custom-blue-dark sm:ml-[60vw] sm:w-[40vw]"
          >
            <DrawerHeader>
              <DrawerTitle className="w-full text-center font-logo text-8xl text-white">
                olc
              </DrawerTitle>
              <DrawerDescription>
                <div className="flex w-full flex-col items-center gap-4 text-custom-blue-dark">
                  <p className={`z-20 mb-16 text-white`}>
                    OmahTI Learning Center
                  </p>
                  <Link
                    href={`https://youtube.com`}
                    className={`relative z-20`}
                  >
                    <Button variant="ghost">Guidebook</Button>
                  </Link>

                  {/* circle for background */}
                  <Image
                    src="/hero/circle.svg"
                    className="absolute right-[-50%] top-1/2 -translate-y-1/2"
                    alt="circle"
                    priority
                    width={400}
                    height={400}
                  />
                  {loggedIn ? (
                    <Link href={`/olclass`} className={`relative z-20 w-full`}>
                      <Button className="w-full">Dashboard</Button>
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={`/auth/login`}
                        className={`relative z-20 w-full`}
                      >
                        <Button variant="outline" className="w-full">
                          Masuk
                        </Button>
                      </Link>
                      <Link
                        href={`/auth/register`}
                        className={`relative z-20 w-full`}
                      >
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
