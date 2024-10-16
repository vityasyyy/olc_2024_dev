"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { PropagateLoader } from "react-spinners";
import useEnrolled from "@/hooks/useEnrolled";

const RegisterButton = ({ classSlug }) => {
  const router = useRouter();
  const [loading, isLoggedIn, isEnrolled] = useEnrolled();

  const handleAction = async () => {
    if (isLoggedIn) {
      // User is logged in, redirect to payment
      router.push(`/olclass/${classSlug}/payment`);
    } else {
      // User is not logged in, redirect to registration
      router.push("/auth/register");
    }
  };

  if (loading) {
    return (
      <Button variant="secondary" className="w-full" disabled>
        <PropagateLoader size={4} color="#ffffff" />
      </Button>
    );
  }

  // conditional button text, according to login state

  if (isEnrolled) {
    return (
      <Button variant="secondary" className={`w-full`} disabled>
        Enrolled
      </Button>
    );
  }

  if (Date.now() >= new Date("2024-10-27T03:00:00.000Z")) {
    return (
      <Button variant="secondary" className={`w-full`} disabled>
        Pendaftaran ditutup
      </Button>
    );
  }

  return (
    <Button variant="secondary" className={`w-full`} onClick={handleAction}>
      Enroll
    </Button>
  );
};

export default RegisterButton;
