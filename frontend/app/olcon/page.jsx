"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

        <h1 className="my-8 text-4xl font-bold">Introduction To IT World</h1>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* speaker profile section */}
          <div className="relative flex w-full flex-row gap-2 md:w-1/3 md:flex-col">
            {/* speaker profile */}
            <Image
              className="h-24 w-auto object-cover md:h-auto md:w-full"
              src="/placeholder.svg"
              alt="Speaker Image"
              width={500}
              height={600}
            />

            {/* speaker details */}
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

          {/* slot + activity description section */}
          <div className="flex w-full flex-col gap-4">
            {/* slot section */}
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-semibold">Slot Tersedia :</p>
              <p className="font-normal">slot non-pendaftar OLClass</p>
              <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-6">
                <div className="flex w-full flex-row gap-3 sm:w-2/3">
                  <Progress className="w-full" value={(enrolled / 20) * 100} />
                  <p className="text-xl font-semibold">{enrolled}/20</p>
                </div>
                <Button
                  className="w-full border-black sm:w-1/3"
                  variant="outline"
                  asChild
                >
                  <Link href="/auth/register">Daftar Sekarang</Link>
                </Button>
              </div>
            </div>

            {/* activity section */}
            <Card />

            {/* activity description */}
            <Description />
          </div>
        </div>
      </ContainerLarge>
    </>
  );
};

const Card = ({
  sesi = "1",
  judul = "Perkenalan ke HTML, CSS dan Javascript",
  jam = "08.00 WIB",
  tanggal = "27 Maret 2024",
  tempat = "Zoom Meeting",
}) => {
  return (
    <div className="flex h-52 w-full flex-col justify-between rounded-xl border-[2px] border-black p-4 shadow-sm">
      <div className="flex h-full flex-col justify-between lg:w-1/3">
        <p className="text-base font-semibold">Sesi {sesi}</p>
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

const Description = ({
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}) => {
  return (
    <div className="flex h-64 w-full flex-col gap-2 rounded-xl border-[2px] border-black p-4 shadow-sm">
      <p className="text-base font-semibold">Deskripsi</p>
      <p className="overflow-auto text-justify font-normal">{desc}</p>
    </div>
  );
};

export default Detail;
