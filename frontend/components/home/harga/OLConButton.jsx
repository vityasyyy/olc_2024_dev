"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useUser from "@/hooks/useUser";

// idx 1: olcon only
// idx 2: olcon + olclass

export default function OLConButton({ idx = 1 }) {
  const [loading, loggedIn] = useUser();
  // function to validate user log in state

  if (loading) {
    return (
      <Button className="w-full">
        <Skeleton className={`h-6 w-full`} />
      </Button>
    );
  }

  if (loggedIn) {
    let href = idx === 1 ? "/olcon/day-1" : "/olclass";
    return (
      <Link href={href} className="w-full">
        <Button className="w-full">Daftar Sekarang</Button>
      </Link>
    );
  }

  let href = idx === 1 ? "/olcon/day-1" : "/auth/register";
  return (
    <Link href={href} className="w-full">
      <Button className="w-full">Daftar Sekarang</Button>
    </Link>
  );
}
