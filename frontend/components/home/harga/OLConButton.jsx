"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function OLConButton({ idx = 1 }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // function to validate user log in state
  async function fetchUser() {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/validate`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.ok) {
      setLoggedIn(true);
    }
    setLoading(false);
  }

  // check if user has logged in
  useEffect(() => {
    fetchUser();
  }, []);

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

  return (
    <Link href="/auth/login" className="w-full">
      <Button className="w-full">Daftar Sekarang</Button>
    </Link>
  );
}
