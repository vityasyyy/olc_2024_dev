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
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olclass/${slug}/enroll`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Enrollment failed. Please try again.");
            }

            // Redirect to the classes page after successful enrollment
            window.location.href = "/class";
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
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const responseJSON = await response.json();
                setIsDike(responseJSON.user.isDike || false);
            } catch (err) {
                setError(err.message);
            }
        };

        const fetchEnrolledClass = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/get-enrolled-class`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
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
                <h3 className="mt-6 mb-8 text-xl font-semibold md:text-2xl lg:mt-4">Pembayaran</h3>
                <div className="flex flex-col gap-16 lg:flex-row lg:gap-8 lg:pr-20">
                    {isDike ? (
                        <div className="flex flex-col gap-2 lg:mt-20 lg:max-w-[52rem] lg:max-h-72">
                            <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
                                Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM
                            </h1>
                            <p className="my-1 text-lg font-medium">
                                Halaman pendaftaran untuk Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM
                            </p>
                            <BenefitList />
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2 lg:mt-20 lg:max-w-[52rem] lg:max-h-72">
                            <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">Pendaftaran Umum</h1>
                            <p className="my-1 text-lg font-medium">
                                Halaman pendaftaran untuk Mahasiswa/i non-DIKE dan untuk umum
                            </p>
                            <BenefitList />
                        </div>
                    )}

                    <div className="flex justify-center items-center">
                        <div className="mb-32 px-[20px] py-[28px] flex flex-col gap-px border-2 max-w-lg min-w-sm md:min-w-md lg:pt-6 lg:my-12 border-black">
                            <form onSubmit={handleEnrollment} className="mb-3 md:mb-0 lg:py-4">
                                <h4 className="hidden text-md font-semibold sm:block">Pembayaran</h4>
                                <Info isDike={isDike} />
                                <div className="mt-2 py-2 px-4 flex flex-row justify-center items-center border-2 border-black mb-5 md:mb-2 lg:mb-0">
                                    <UploadButton />
                                </div>
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                <Button
                                    type="submit"
                                    className="rounded-none text-lg h-[42px]"
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
        <ol className="list-decimal list-inside mx-2 font-medium">
            <li>Tiket OLClass day 2-5</li>
            <li>Tiket OLCon day 1 dan 6 (limited)</li>
            <li>100% refund untuk kehadiran penuh</li>
        </ol>
    </div>
);

const Info = ({ isDike }) => (
    <div className="mt-2 mb-0">
        {isDike ? (
            <ol className="pl-3 text-sm list-disc list-outside mx-2 text-slate-500">
                <li>Commitment fee (akan dikembalikan jika mengikuti seluruh rangkaian OLClass) seharga IDR 75.000</li>
                <li>Pembayaran transfer kepada <strong>BNI a.n Andreandhiki (083456688)</strong></li>
                <li>Beri catatan dengan format <strong>Nama_NIM_DIKEOLC</strong></li>
            </ol>
        ) : (
            <ol className="pl-3 text-sm list-disc list-outside mx-2 text-slate-500">
                <li>Commitment fee (akan dikembalikan jika mengikuti seluruh rangkaian OLClass) seharga IDR 75.000</li>
                <li>Biaya pendaftaran sebesar IDR 5.000</li>
                <li>Pembayaran transfer kepada <strong>BNI a.n Andreandhiki (083456688)</strong></li>
                <li>Beri catatan dengan format <strong>Nama_NIM_DIKEOLC</strong></li>
            </ol>
        )}
    </div>
);

const UploadButton = () => (
    <div className="mt-2 mb-5 flex justify-center">
        <a
            href="https://drive.google.com/your-upload-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-md text-gray-700 hover:text-blue-600 transition duration-200"
        >
            <span className="block mr-2">
                <Image />
            </span>
            Upload Bukti Pembayaran
        </a>
    </div>
);

export default Payment;
