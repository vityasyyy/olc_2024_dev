"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useUser from "@/hooks/useUser";

const Toast = () => {
  // check if user has logged in
  const [loading, loggedIn] = useUser();

  let text, button;
  if (loading) {
    text = <Skeleton className="h-8 w-52" />;
    button = (
      <Button className="w-32 font-medium sm:w-fit">
        <Skeleton className="h-4 w-24" />
      </Button>
    );
  } else {
    if (loggedIn) {
      text = (
        <p className="text-center font-semibold sm:text-nowrap">
          Masuk ke dashboard OLClass
        </p>
      );
      button = (
        <Link href="/olclass">
          <Button className="w-full font-medium sm:w-fit">Dashboard</Button>
        </Link>
      );
    } else {
      text = (
        <p className="text-center font-semibold sm:text-nowrap">
          Gabung dengan OLClass sekarang
        </p>
      );
      button = (
        <Link href="/auth/login">
          <Button className="w-full font-medium sm:w-fit">
            Daftar OLClass
          </Button>
        </Link>
      );
    }
  }

  return (
    // toast and cta
    <div className="z-20 mx-auto flex w-fit px-8 max-w-xs flex-col items-center gap-2.5 rounded-lg bg-white p-2.5 text-sm sm:mx-0 sm:w-fit sm:max-w-xl sm:flex-row sm:px-4">
      {text}
      {button}
    </div>
  );
};

export default Toast;
