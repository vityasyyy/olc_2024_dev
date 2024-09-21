'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton"
const UserName = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {         
            router.push('/auth/login')
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
  }, []);

  if (loading) return <Skeleton className="w-96 h-8 mt-2" />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <p className="animate-in fade-in slide-in-from-right-5 duration-700">
      {user ? user.username : <Skeleton className="w-96 h-8 mt-2" />}
    </p>
  );
};

export default UserName;
