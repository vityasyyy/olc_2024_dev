"use client";
import { useEffect, useState } from "react";

export default function useEnrolled() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    async function checkAuthAndEnrollment() {
      if (!token) {
        setIsLoggedIn(false);
        setIsEnrolled(false);
        setLoading(false);
        return;
      }

      try {
        // Validate user token
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!authResponse.ok) {
          setIsLoggedIn(false);
          setIsEnrolled(false);
          setLoading(false);
          return;
        }

        setIsLoggedIn(true);

        // Fetch enrolled class
        const enrolledResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/get-enrolled-class`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const enrolledData = await enrolledResponse.json();
        setIsEnrolled(!!enrolledData.enrolledTo);
      } catch (error) {
        console.error("Error checking auth and enrollment:", error);
        setIsLoggedIn(false);
        setIsEnrolled(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuthAndEnrollment();
  }, []);

  return [loading, isLoggedIn, isEnrolled];
}