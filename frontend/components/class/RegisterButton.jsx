"use client"; // This is necessary for client-side behavior

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
const RegisterButton = ({ classSlug }) => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [isEnrolled, setIsEnroled] = useState(false);
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
  }, []);

  const handleAction = async () => {
    setLoading(true);
    
    if (isLoggedIn) {
      // User is logged in, redirect to payment
      router.push(`/class/${classSlug}/payment`);
    } else {
      // User is not logged in, redirect to registration
      router.push("/auth/register");
    }

    setLoading(false);
  };

  return (
    <Button
      variant="secondary"
      onClick={handleAction}
      disabled={loading}
    >
      {loading ? "Loading..." : isLoggedIn ? "Enroll" : "Daftar Sekarang"}
    </Button>
  );
};

export default RegisterButton;
