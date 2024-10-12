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
          "Registration failed. This email might have been registered before or has been used for olclass + olcon packet",
        );
      }

      // Redirect to success page or OLCon page after successful registration
      router.push(`/olcon/`);
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

  return (
    <>
      {/* Register Button */}
      <Button variant="secondary" onClick={handleAction}>
        Join OLCon
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">Register for OLCon</h2>

            {/* Username Field */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={handleConfirm}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterButton;
