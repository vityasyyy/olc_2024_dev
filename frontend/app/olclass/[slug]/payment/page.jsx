"use client";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import ContainerLarge from "@/components/global/ContainerLarge";
import Title from "@/components/payment/Title";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Image } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const Payment = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const [isDike, setIsDike] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/validate`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const responseJSON = await response.json();
        setIsDike(responseJSON.user.isDike || false);
      } catch (err) {
        setError(err.message);
      }
    };

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
        const responseJSON = await response.json();
        if (responseJSON.enrolledTo) {
          router.push("/class");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUser();
    fetchEnrolledClass();
  }, [router, slug]);

  return (
    <>
      <ContainerLarge>
        <BackButton black />

        <h3 className="mb-8 mt-6 text-xl font-semibold md:text-2xl lg:mt-4">
          Pembayaran
        </h3>
        <div className="flex flex-col items-center gap-8 md:mt-24 md:flex-row md:justify-between">
          {/* left/top */}
          <Title isDike={isDike} />

          {/* bottom/right */}
          <PaymentForm />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </ContainerLarge>
    </>
  );
};

export default Payment;

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleEnrollment = async (e) => {
    e.preventDefault();
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
    }
  };
  return (
    <div className="flex w-full max-w-sm shrink-0 flex-col gap-px border-[1.5px] border-black px-[20px] py-[28px]">
      <form onSubmit={handleEnrollment} className="mb-3 md:mb-0 lg:py-4">
        <h4 className="text-md hidden font-semibold sm:block">Pembayaran</h4>
        <div className="mb-0 mt-2">
          <ol className="mx-2 list-outside list-disc pl-3 text-sm text-custom-gray-dark">
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
      </form>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      <Button type="submit" className="py-6 text-lg" variant="secondary">
        {loading ? "Loading..." : "Submit"}
      </Button>
    </div>
  );
};

const UploadButton = () => (
  <div>
    <Link
      href="https://drive.google.com/your-upload-link"
      target="_blank"
      rel="noopener noreferrer"
      className="text-md flex items-center text-gray-700 transition duration-200 hover:text-blue-600"
    >
      <span className="mr-2 block">
        <Image />
      </span>
      Upload Bukti Pembayaran
    </Link>
  </div>
);
