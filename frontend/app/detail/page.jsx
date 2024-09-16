"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";

const Detail = () => {
  let enrolled = 10;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ContainerLarge>
        <BackButton />

        <h1 className="my-8 text-4xl font-bold">Software Engineering</h1>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* speaker and image section */}
          <div className="relative flex w-full flex-row gap-2 md:w-1/3 md:flex-col">
            <Image
              className="h-24 w-auto object-cover md:h-auto md:w-full"
              src="/placeholder.svg"
              alt="Speaker Image"
              width={500}
              height={600}
            />

            <div className="flex flex-col sm:gap-2">
              <p className="font-medium">Speaker</p>
              <p className="text-xl font-semibold sm:text-2xl">
                Fahmi Shampoerna
              </p>
              <p className="font-medium text-gray-500">
                Head Front-End at Gojek
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="flex w-full flex-col gap-4">
            {/* progress bar */}
            <p className="text-2xl font-semibold">Slot Tersedia :</p>
            <div className="flex flex-wrap gap-3">
              <Progress value={(enrolled / 20) * 100} />
              <p className="text-xl font-semibold">{enrolled}/20</p>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card judul="Argya" />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </ContainerLarge>
    </>
  );
};

const Card = ({
  sesi = "1",
  judul = "Judul",
  jam = "08.00 WIB",
  tanggal = "27 Maret 2024",
  tempat = "Zoom Meeting",
}) => {
  return (
    <div className="flex h-52 w-full flex-col justify-between rounded-xl border-[2px] border-black p-4 shadow-sm">
      <p className="text-base font-semibold">Sesi {sesi}</p>

      <div>
        <p className="text-3xl font-semibold">{judul}</p>
        <div className="flex justify-between text-sm font-medium">
          <div>
            <p>{jam}</p>
            <p>{tanggal}</p>
          </div>
          <div className="flex items-end">
            <p>{tempat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
