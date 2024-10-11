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

  // conditional button text, according to login state
  let buttonText;
  if (isLoggedIn) {
    buttonText = "Enroll";
  } else {
    buttonText = "Daftar Sekarang";
  }

  if (loading) {
    return (
      <Button variant="secondary" className="w-full" disabled>
        <PropagateLoader size={4} color="#ffffff" />
      </Button>
    );
  }

  if (isEnrolled) {
    return (
      <Button variant="secondary" className={`w-full`} disabled>
        Kamu telah terdaftar dalam kelas ini
      </Button>
    );
  }

  return (
    <Button variant="secondary" className={`w-full`} onClick={handleAction}>
      {buttonText}
    </Button>
  );
};

export default RegisterButton;
