"use client";
import BackButton from "@/components/global/BackButton";
import ContainerLarge from "@/components/global/ContainerLarge";
import Title from "@/components/payment/Title";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Image } from "lucide-react";

const Payment = () => {
  return (
    <>
      <ContainerLarge>
        <BackButton black />


        <h3 className="mb-8 mt-6 text-xl font-semibold md:text-2xl lg:mt-4">
          Pembayaran
        </h3>
        <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between md:mt-24">
          {/* left/top */}
          <Title isDike />

          {/* bottom/right */}
          <PaymentForm />
        </div>
      </ContainerLarge>
    </>
  );
};

export default Payment;

const PaymentForm = () => {
  const [file, setFile] = useState(null);
  const handleFileUpload = (e) => setFile(e.target.files[0]);
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="flex w-full max-w-sm shrink-0 flex-col gap-px border-[1.5px] border-black px-[20px] py-[28px]">
      <form onSubmit={handleSubmit} className="mb-3 md:mb-0 lg:py-4">
        <h4 className="text-md hidden font-semibold sm:block">Pembayaran</h4>
        <div className="mb-0 mt-2">
          <ol className="text-custom-gray-dark mx-2 list-outside list-disc pl-3 text-sm">
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
          <label
            className="text-md flex items-center gap-2 text-custom-gray-dark hover:cursor-pointer"
            htmlFor="file-upload"
          >
            <span className="block">
              <Image className="h-4 w-4" />
            </span>
            Upload Bukti Pembayaran
          </label>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileUpload}
            className="hidden file:mr-4 file:border-0 file:bg-blue-50 file:py-2 file:text-sm"
          />
        </div>
      </form>
      <Button className="py-6 text-lg" variant="secondary">
        Submit
      </Button>
    </div>
  );
};
