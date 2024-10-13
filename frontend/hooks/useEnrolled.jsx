"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

export default function useEnrolled() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  // const router = useRouter();

  const fetchEnrolledClass = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/get-enrolled-class`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const responseJSON = await response.json();
    if (responseJSON.enrolledTo) {
      setIsEnrolled(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Validate user token
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch(() => setIsLoggedIn(false));
    }
    setLoading(false);

    fetchEnrolledClass().catch();
  }, []);

  return [loading, isLoggedIn, isEnrolled];
}
