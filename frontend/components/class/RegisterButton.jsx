"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const RegisterButton = ({ classSlug }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const router = useRouter();

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
            setLoading(false);
          } else {
            setIsLoggedIn(false);
            setLoading(false);
          }
        })
        .catch(() => setIsLoggedIn(false));
    }
    fetchEnrolledClass();
  }, []);

  const handleAction = async () => {
    if (isLoggedIn) {
      // User is logged in, redirect to payment
      router.push(`/olclass/${classSlug}/payment`);
    } else {
      // User is not logged in, redirect to registration
      router.push("/auth/register");
    }
  };

  // conditional button text, according to login state
  let buttonText;
  if (loading) {
    buttonText = <Skeleton className="h-6 w-32" />;
  } else {
    if (isLoggedIn) {
      buttonText = "Enroll";
    } else {
      buttonText = "Daftar Sekarang";
    }
  }

  return (
    <Button variant="secondary" onClick={handleAction} disabled={isEnrolled}>
      {buttonText}
    </Button>
  );
};

export default RegisterButton;
