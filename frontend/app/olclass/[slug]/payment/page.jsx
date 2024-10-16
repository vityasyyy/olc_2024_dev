"use client";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import Title from "@/components/payment/Title";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import payment from "@/public/global/payment.png";
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
import { PropagateLoader } from "react-spinners";

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

      setLoading(false);
    };

    fetchData().catch();
  }, [router, slug]);

  if (loading) {
    return (
      <>
        <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 md:overflow-hidden">
          {/* left/top */}
          <div className="h-72 bg-custom-blue-dark px-[min(5vw,32px)] py-8 md:h-screen">
            <BackButton />
            <h1
              className={`relative z-30 mt-2 text-2xl font-semibold text-white`}
            >
              Pembayaran
            </h1>
          </div>

          {/* right/bottom/form */}
          <div className="flex flex-col justify-center gap-1 overscroll-contain bg-white px-[min(5vw,32px)] py-8 duration-700 animate-in fade-in md:overflow-auto md:overscroll-y-contain md:pb-24 md:pt-56"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-2">
        {/* left/top */}
        <div className="relative h-72 overflow-hidden bg-custom-blue-dark px-[min(5vw,32px)] py-8 md:h-screen">
          <BackButton />
          <h1
            className={`relative z-30 mt-2 text-2xl font-semibold text-white`}
          >
            Pembayaran
          </h1>

          {/* orange box */}
          <div
            className={`absolute bottom-0 right-0 z-0 h-48 w-48 rounded-l-lg bg-custom-brown-light md:h-[80vh] md:w-[45%]`}
          ></div>

          {/* image with a bunch of wrappers */}
          <div
            className={`absolute bottom-0 right-0 z-10 h-64 w-80 overflow-visible md:h-[95vh] md:w-full`}
          >
            <div className={`relative h-full w-full overflow-visible`}>
              {/* actual image */}
              <Image
                src={payment}
                className={`z-10 object-cover`}
                fill
                sizes={`100%`}
                alt={`OmahTI Learning Center`}
                placeholder="blur"
                priority
              />
            </div>
          </div>
        </div>

        {/* right/bottom/form */}
        <div className="z-40 flex flex-col justify-center gap-1 overscroll-contain bg-white px-[min(5vw,32px)] py-8 duration-700 animate-in fade-in md:overflow-auto md:overscroll-y-contain">
          {/* title and subtitle */}
          <div className="flex flex-col gap-1 md:mt-8">
            <Title isDike={isDike} />
          </div>

          {/* form */}
          <PaymentForm slug={slug} isDike={isDike} />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Payment;

const PaymentForm = ({ slug, className, isDike }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
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
      router.push("/olclass");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let buttonContent = loading ? (
    <Button
      disabled
      variant={`secondary`}
      className={`py-3 text-sm font-medium sm:text-base`}
    >
      <PropagateLoader size={4} color={`#ffffff`} />
    </Button>
  ) : (
    <Button
      variant={`secondary`}
      className={`py-3 text-sm font-medium sm:text-base`}
    >
      Submit
    </Button>
  );

  return (
    <div
      className={`mt-6 flex w-full shrink-0 flex-col rounded-md border-[1.5px] border-custom-blue-dark px-[20px] py-[10px] ${className}`}
    >
      <form
        onSubmit={handleSubmit}
        className="mb-3 flex flex-col gap-2 py-4 md:mb-0"
      >
        <h4 className="text-md font-semibold text-custom-blue-dark">
          Pembayaran
        </h4>
        <div className="my-2">
          <ol className="mx-2 list-outside list-disc pl-3 text-sm text-custom-black">
            <li>Commitment fee seharga IDR 60.000</li>
            {isDike || <li>Biaya pendaftaran sebesar IDR 15.000</li>}
            {isDike || (
              <li>
                <b>Total Pembayaran seharga IDR 75.000</b>
              </li>
            )}
            <li>
              Pembayaran transfer kepada{" "}
              <strong>BNI a.n Muhammad Fariz (1442851203)</strong>
            </li>
            <li>
              Beri catatan dengan format{" "}
              <strong>[Nama]_[KelasOLClass]_OLC</strong>
            </li>
          </ol>
        </div>
        <UploadButton />
        <AlertDialog>
          <AlertDialogTrigger asChild>{buttonContent}</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Enrollment</AlertDialogTitle>
              <AlertDialogDescription>
                Apakah anda yakin untuk mendaftar di kelas ini? Pastikan anda
                membaca instruksi dengan baik, teliti, lengkap, dan benar.
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
  <Link
    href="https://forms.gle/sFa6Rt4gVuXfsqXQ8"
    target="_blank"
    rel="noopener noreferrer"
    className="flex w-full items-center justify-center border-[1.5px] border-custom-blue-dark py-2 font-medium text-custom-black hover:bg-custom-blue/10 sm:text-base"
  >
    <span className="mr-2 block">
      <ImageIcon className={`h-5 font-light text-custom-blue-dark`} />
    </span>
    Upload Bukti Pembayaran
  </Link>
);
