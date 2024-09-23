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
      <ContainerLarge>
        <BackButton black />

        <h3 className="mb-8 mt-6 text-xl font-semibold md:text-2xl lg:mt-4">
          Pembayaran
        </h3>
        <div className="flex flex-col items-center gap-8 md:mt-24 md:flex-row md:justify-between">
          {/* left/top */}
          <Title isDike={isDike} />

          {/* bottom/right */}
          <PaymentForm slug={slug} />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </ContainerLarge>
    </>
  );
};

export default Payment;

const PaymentForm = ({ slug }) => {
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
        }
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
    <div className="flex w-full max-w-sm shrink-0 flex-col gap-px border-[1.5px] border-black px-[20px] py-[28px]">
      <form onSubmit={handleSubmit} className="mb-3 md:mb-0 lg:py-4">
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
        <Button type="submit" className="py-6 text-lg" variant="secondary">
          Submit
        </Button>
      </form>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onConfirm={handleEnrollment} // Handle actual enrollment on confirmation
        onCancel={() => setIsModalOpen(false)} // Close modal if canceled
        loading={loading} // Pass loading state to disable buttons during submission
      />
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

const Modal = ({ isOpen, onConfirm, onCancel, loading }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Confirm Enrollment</h2>
        <p className="mb-6 text-gray-700">
          Are you sure you want to submit the payment? Make sure you read the instruction properly
        </p>
        <div className="flex justify-end space-x-3">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};
