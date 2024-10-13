"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropagateLoader } from "react-spinners";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useEnrolled from "@/hooks/useEnrolled";

const RegisterButton = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [loading2, loggedIn, isEnrolled] = useEnrolled();
  const router = useRouter();

  const handleAction = () => {
    setIsModalOpen(true); // Open modal on button click
  };

  const handleConfirm = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/olcon/joinolcon`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(
          "Registration failed. This email might have been registered before or has been used for OLClass + OLCon packet",
        );
      }

      // Redirect to success page or OLCon page after successful registration
      router.push(`/olcon/day-1`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const buttonContent =
    loading || loading2 ? (
      <Button variant={`secondary`} className={`w-full`} disabled>
        <PropagateLoader size={4} color={`#ffffff`} />
      </Button>
    ) : isEnrolled ? (
      <Button disabled variant="secondary" className={`w-full`}>
        Anda sudah terdaftarkan OLCon
      </Button>
    ) : (
      <Button variant="secondary" className={`w-full`}>
        Enroll
      </Button>
    );

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>{buttonContent}</AlertDialogTrigger>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="mx-auto">
              Enter Your Information
            </AlertDialogTitle>
            <AlertDialogDescription className="mx-auto">
              Please provide your name and email address.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <AlertDialogFooter className="ml-0 mt-6">
            <div className="flex w-full flex-col gap-3">
              <AlertDialogAction
                className="bg-custom-blue-dark text-white hover:bg-custom-blue-dark/90"
                onClick={handleConfirm}
              >
                Submit
              </AlertDialogAction>
              <AlertDialogCancel className="border-custom-blue-dark text-custom-blue-dark hover:bg-custom-blue-dark/10">
                Cancel
              </AlertDialogCancel>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );

};

export default RegisterButton;
