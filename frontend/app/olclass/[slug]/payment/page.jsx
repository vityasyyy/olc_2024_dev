"use client";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import ContainerLarge from "@/components/global/ContainerLarge";
import Title from "@/components/payment/Title";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Image } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
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

const Payment = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const [isDike, setIsDike] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const [userResponse, enrolledResponse] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/get-enrolled-class`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (userResponse.ok) {
        const userJSON = await userResponse.json();
        setIsDike(userJSON.user.isDike || false);
      } else {
        setError("Failed to validate user.");
      }

      if (enrolledResponse.ok) {
        const enrolledJSON = await enrolledResponse.json();
        if (enrolledJSON.enrolledTo) {
          router.push("/olclass");
        }
      } else {
        setError("Failed to fetch enrolled classes.");
      }
    };

    fetchData();
  }, [router, slug]);

  return (
    <>
      <ContainerLarge className={`text-custom-blue-dark`}>
        <BackButton blue />

        <h3 className="mb-8 mt-6 hidden text-xl font-semibold sm:flex md:text-2xl lg:mt-4">
          Pembayaran
        </h3>
        <div className="grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-2 md:flex-row md:justify-between">
          {/* left/top */}
          <Title isDike={isDike} />

          {/* bottom/right */}
          <PaymentForm slug={slug} className={`mx-auto`} />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </ContainerLarge>
    </>
  );
};

export default Payment;

const PaymentForm = ({ slug, className }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const handleEnrollment = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/olclass/${slug}/enroll`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Enrollment failed. Please try again.");
      }

      // Redirect to the classes page after successful enrollment
      window.location.href = "/olclass";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setIsModalOpen(false); // Close modal after submission
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open modal on submit
  };

  return (
    <div
      className={`flex w-full max-w-md shrink-0 flex-col border-[1.5px] border-custom-blue-dark px-[20px] py-[10px] ${className}`}
    >
      <form
        onSubmit={handleSubmit}
        className="mb-3 flex flex-col gap-2 md:mb-0 lg:py-4"
      >
        <h4 className="text-md hidden font-semibold text-custom-blue-dark sm:block">
          Pembayaran
        </h4>
        <div className="mb-0 mt-2">
          <ol className="mx-2 list-outside list-disc pl-3 text-sm text-custom-black">
            <li>Pembayaran seharga IDR 75.000</li>

            <li>
              Pembayaran transfer kepada{" "}
              <strong>BNI a.n Andreandhiki (083456688)</strong>
            </li>
            <li>
              Beri catatan dengan format <strong>Nama_NIM_DIKEOLC</strong>
            </li>
          </ol>
        </div>
        <div className="mb-5 mt-2 flex flex-row items-center justify-center border-[1.5px] border-black px-4 py-2 md:mb-2 lg:mb-0">
          <UploadButton />
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={`secondary`} className={`py-3 text-base`}>
              Submit
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Enrollment</AlertDialogTitle>
              <AlertDialogDescription>
                Are you absolutely sure you want to submit the payment? Make
                sure you have read the instructions properly.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className={`border-custom-blue-dark text-custom-blue-dark hover:bg-custom-blue-dark/10`}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleEnrollment}
                className={`bg-custom-blue-dark text-white hover:bg-custom-blue-dark/80`}
              >
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const UploadButton = () => (
  <div>
    <Link
      href="https://drive.google.com/your-upload-link"
      target="_blank"
      rel="noopener noreferrer"
      className="text-md flex items-center text-custom-black transition-all hover:text-custom-gray-dark"
    >
      <span className="mr-2 block">
        <Image />
      </span>
      Upload Bukti Pembayaran
    </Link>
  </div>
);
