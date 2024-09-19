"use client"
import BackButton from "@/components/global/BackButton";
import ContainerLarge from "@/components/global/ContainerLarge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Image } from "lucide-react";

const Payment = () => {

    const [file, setFile] = useState(null);
    const handleFileUpload = (e) => setFile(e.target.files[0]);
    const handleSubmit = (e) => e.preventDefault();


    return (

        <>
            <ContainerLarge>
                <BackButton />
                <h3 className="mt-6 mb-8 text-xl font-semibold md:text-2xl lg:mt-4">Pembayaran</h3>
                <div className=" flex flex-col gap-16 lg:flex-row lg:gap-8 lg:pr-20">
                    <div className="flex flex-col gap-2 lg:mt-20  lg:max-w-[52rem] lg:max-h-72 " >
                        <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl  ">Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM</h1>
                        <p className="my-1 text-lg font-medium">halaman pendaftaran untuk Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM</p>
                        <BenefitList />
                    </div>

                    <div className="flex justify-center items-center">
                    <div className="mb-32 px-[20px] py-[28px] flex flex-col gap-px border-2 max-w-lg min-w-sm md:min-w-md lg:pt-6 lg:my-12 border-black">
                        <form onSubmit={handleSubmit} className=" mb-3 md:mb-0 lg:py-4">
                            <h4 className="hidden text-md font-semibold sm:block">Pembayaran</h4>
                            <Info />
                            <div className="mt-2 py-2 px-4 flex flex-row justify-center items-center border-2 border-black mb-5 md:mb-2 lg:mb-0 ">
                                <label className="flex items-center text-md gap-2 text-gray-700 hover:cursor-pointer" htmlFor="file-upload">
                                    <span className="block"><Image /></span>Upload Bukti Pembayaran
                                </label>
                                <input
                                    type="file"
                                    id="file-upload"
                                    onChange={handleFileUpload}
                                    className="file:mr-4 file:py-2 file:border-0 file:text-sm file:bg-blue-50 hidden"
                                />
                            </div>

                        </form>
                        <Button className="rounded-none text-lg h-[42px]" variant="secondary">Submit</Button>
                    </div>
                    </div>
                </div>

            </ContainerLarge>
        </>
    )
}

export default Payment;

const BenefitList = () => {
    return (
        <div>
            <p className="text-lg font-bold">Benefit</p>
            <ol className="list-decimal list-inside mx-2 font-medium">
                <li>Tiket OLClass day 2-5</li>
                <li>Tiket OLCon day 1 dan 6 (limited)</li>
                <li>100% refund untuk kehadiran</li>
            </ol>
        </div>
    )
}

const Info = () => {
    return (
        <div className="mt-2 mb-0">
            <ol className="pl-3 text-sm list-disc list-outside mx-2 text-slate-500">
                <li>Pembayaran seharga IDR 75.000</li>
                <li>Pembayaran transfer kepada <strong>BNI a.n Andreandhiki (083456688)</strong></li>
                <li>Beri catatan dengan format <strong>Nama_NIM_DIKEOLC</strong></li>
            </ol>
        </div>
    )
}