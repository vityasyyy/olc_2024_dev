"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress"


const Detail = () => {
  const Router = useRouter();
  return (
    <>
      <div className="p-4">
        <BackButton />
      </div>

      <h1 className="p-6 pt-4 text-[2rem] font-bold sm:text-[2.5rem]">
        Software Engineering
      </h1>

      <div className="flex flex-col md:flex-row px-6 gap-6">
        {/* Speaker and image section */}
        <div className="flex flex-col items-start w-full md:w-1/3">
          <Image
            className="w-full h-auto sm:w-[20rem] sm:h-[24rem] object-cover"
            src="/placeholder.svg"
            alt="Speaker Image"
            width={500}
            height={600}
          />
          <div className="flex flex-col gap-1 mt-5">
            <p className="text-base font-medium">Speaker</p>
            <p className="text-2xl font-semibold">Fahmi Shampoerna</p>
            <p className="text-base font-medium text-gray-500">
              Head Front-End at Gojek
            </p>
          </div>
        </div>

        {/* Session cards section */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Slot Tersedia :</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Progress value={33}/>
            <p className="text-xl font-semibold">10/20</p>
          </div>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({
  sesi = "Sesi 1",
  judul = "Perkenalan ke HTML, CSS dan Javascript",
  jam = "08.00 WIB",
  tanggal = "27 Maret 2024",
  tempat = "Zoom Meeting",
}) => {
  return (
    <div className="w-full h-52 p-4 flex flex-col justify-between rounded-xl border-[2px] border-black shadow-sm">
        <p className="text-base font-semibold">{sesi}</p>
        
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
