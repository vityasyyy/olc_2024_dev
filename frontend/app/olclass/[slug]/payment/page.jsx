"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useRouter
import { Image } from "lucide-react";
import BackButton from "@/components/global/BackButton";
import ContainerLarge from "@/components/global/ContainerLarge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const Payment = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDike, setIsDike] = useState(false);

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
      <Navbar />
      <ContainerLarge>
        <BackButton black />
        <h3 className="mb-8 mt-6 text-xl font-semibold md:text-2xl lg:mt-4">
          Pembayaran
        </h3>
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-8 lg:pr-20">
          {isDike ? (
            <div className="flex flex-col gap-2 lg:mt-20 lg:max-h-72 lg:max-w-[52rem]">
              <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
                Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM
              </h1>
              <p className="my-1 text-lg font-medium">
                Halaman pendaftaran untuk Mahasiswa/i Departemen Ilmu Komputer
                dan Elektronika UGM
              </p>
              <BenefitList />
            </div>
          ) : (
            <div className="flex flex-col gap-2 lg:mt-20 lg:max-h-72 lg:max-w-[52rem]">
              <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
                Pendaftaran Umum
              </h1>
              <p className="my-1 text-lg font-medium">
                Halaman pendaftaran untuk Mahasiswa/i non-DIKE dan untuk umum
              </p>
              <BenefitList />
            </div>
          )}

          <div className="flex items-center justify-center">
            <div className="min-w-sm md:min-w-md mb-32 flex max-w-lg flex-col gap-px border-2 border-black px-[20px] py-[28px] lg:my-12 lg:pt-6">
              <form
                onSubmit={handleEnrollment}
                className="mb-3 md:mb-0 lg:py-4"
              >
                <h4 className="text-md hidden font-semibold sm:block">
                  Pembayaran
                </h4>
                <Info isDike={isDike} />
                <div className="mb-5 mt-2 flex flex-row items-center justify-center border-2 border-black px-4 py-2 md:mb-2 lg:mb-0">
                  <UploadButton />
                </div>
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                <Button
                  type="submit"
                  className="h-[42px] rounded-none text-lg"
                  variant="secondary"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </ContainerLarge>
      <Footer />
    </>
  );
};

const BenefitList = () => (
  <div>
    <p className="text-lg font-bold">Benefit</p>
    <ol className="mx-2 list-inside list-decimal font-medium">
      <li>Tiket OLClass day 2-5</li>
      <li>Tiket OLCon day 1 dan 6 (limited)</li>
      <li>100% refund untuk kehadiran penuh</li>
    </ol>
  </div>
);

const Info = ({ isDike }) => (
  <div className="mb-0 mt-2">
    {isDike ? (
      <ol className="mx-2 list-outside list-disc pl-3 text-sm text-slate-500">
        <li>
          Commitment fee (akan dikembalikan jika mengikuti seluruh rangkaian
          OLClass) seharga IDR 75.000
        </li>
        <li>
          Pembayaran transfer kepada{" "}
          <strong>BNI a.n Andreandhiki (083456688)</strong>
        </li>
        <li>
          Beri catatan dengan format <strong>Nama_NIM_DIKEOLC</strong>
        </li>
      </ol>
    ) : (
      <ol className="mx-2 list-outside list-disc pl-3 text-sm text-slate-500">
        <li>
          Commitment fee (akan dikembalikan jika mengikuti seluruh rangkaian
          OLClass) seharga IDR 75.000
        </li>
        <li>Biaya pendaftaran sebesar IDR 5.000</li>
        <li>
          Pembayaran transfer kepada{" "}
          <strong>BNI a.n Andreandhiki (083456688)</strong>
        </li>
        <li>
          Beri catatan dengan format <strong>Nama_NIM_DIKEOLC</strong>
        </li>
      </ol>
    )}
  </div>
);

const UploadButton = () => (
  <div className="mb-5 mt-2 flex justify-center">
    <a
      href="https://drive.google.com/your-upload-link"
      target="_blank"
      rel="noopener noreferrer"
      className="text-md flex items-center text-gray-700 transition duration-200 hover:text-blue-600"
    >
      <span className="mr-2 block">
        <Image />
      </span>
      Upload Bukti Pembayaran
    </a>
  </div>
);

export default Payment;
