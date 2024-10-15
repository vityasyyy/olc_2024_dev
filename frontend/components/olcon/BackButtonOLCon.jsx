"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackButtonOLCon() {
  const [enrolledClass, setEnrolledClass] = useState(false);
  const [loading, setLoading] = useState(true); // Start loading as true
  useEffect(() => {
    const fetchEnrolledClass = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/get-enrolled-class`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch enrolled OLClass");
        }
        setEnrolledClass(true); // Assume classData is a single olclass object
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledClass().catch();
  }, []);

  let linkHref = enrolledClass ? "/olclass" : "/../";

  if (loading) {
    return (
      <Button variant="link" className="p-0">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Kembali
      </Button>
    );
  }

  return (
    <Link href={linkHref}>
      <Button variant="link" className="p-0">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Kembali
      </Button>
    </Link>
  );
}
