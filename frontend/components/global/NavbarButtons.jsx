"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
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

export default function NavbarButtons({
  className,
  variant = "blue",
  ...props
}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // check if user has logged in
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/validate`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log("ini auth", response);

        if (response.ok) {
          setLoggedIn(true);
        }
      } catch (err) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

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
        // halaman class, logout
        buttons = (
          <Link href="/">
            <Button onClick={onSubmitLogout} variant="outline" className="border-custom-blue-dark text-custom-blue-dark">
              Keluar
            </Button>
          </Link>
        );
      } else {
        // dashboard
        buttons = (
          <Link href="/class">
            <Button>Dashboard</Button>
          </Link>
        );
      }
    } else {
      if (variant === "blue") {
        // landing page, belom log in
        buttons = (
          <>
            <Link href="/auth/login">
              <Button variant="outline">Masuk</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Daftar</Button>
            </Link>
          </>
        );
      } else {
        // nothing, belom log in dan putih ga ada case
        buttons = <></>;
      }
    }
  }
  return (
    <>
      {/* buttons */}
      <div className="hidden items-baseline space-x-4 sm:flex">{buttons}</div>

      {/* hamburger menu on mobile */}
      <Drawer direction="right" className="block sm:hidden">
        <DrawerTrigger className="block sm:hidden">
          <Menu className="text-custom-brown-light" />
        </DrawerTrigger>
        <DrawerContent
          noThumb
          className="ml-[10vw] flex h-full w-[90vw] flex-col items-center rounded-none rounded-l-[10px] py-12 text-custom-blue-dark"
        >
          <DrawerHeader>
            <DrawerTitle className="w-full text-center font-logo text-7xl text-custom-blue-dark">
              OLC
            </DrawerTitle>
            <DrawerDescription>
              <div className="flex w-full flex-col items-center gap-4 text-custom-blue-dark">
                <p>OmahTI Learning Center</p>
                <Button variant="outline" className="mt-16 w-full">
                  Masuk
                </Button>
                <Button className="w-full">Daftar</Button>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="w-full">
            <DrawerClose className="flex justify-center">
              <CircleX className="h-8 w-8 text-custom-blue-dark" />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
