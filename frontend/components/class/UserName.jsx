"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
const UserName = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

        if (!response.ok) {
          router.push("/auth/login");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <Skeleton className="mt-2 h-8 w-96" />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <p className="duration-700 animate-in fade-in slide-in-from-right-5">
      {user ? user.username : <Skeleton className="mt-2 h-8 w-96" />}
    </p>
  );
};

export default UserName;
