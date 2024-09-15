"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/global/Container";
import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Tag from "@/components/global/Tag";  
import { Fullscreen } from "lucide-react";

const Class = () => {
  const Router = useRouter();

  return (
    <div className="px-4 py-6">
      <Navbar />
      <h1 className="text-3xl sm:text-4xl font-semibold pb-10">
        Halo, 
        <br />
        Sultan Tampan Suyudi
      </h1>

      <Tag>OLClass</Tag>

      <p className="text-xl sm:text-2xl font-bold pt-10">Kelas Tersedia</p>
      <p className="pb-6">Kamu hanya dapat memilih satu kelas dan pendaftar akan langsung mendapat akses OLConvention</p>
      
      <div className="flex flex-wrap gap-6 justify-center">
        <Card 
          label="Software Engineering"
          judul="Judul"
          tanggal="22 Sept - 20 Okt 2024"
        />
        <Card 
          label="Software Engineering"
          judul="Judul"
          tanggal="22 Sept - 20 Okt 2024"
        />
        <Card 
          label="Software Engineering"
          judul="Judul"
          tanggal="22 Sept - 20 Okt 2024"
        />
        <Card 
          label="Software Engineering"
          judul="Judul"
          tanggal="22 Sept - 20 Okt 2024"
        />
      </div>
      
    </div>
  );
};

const Card = ({ label = "Software Engineering", judul = "Judul", tanggal = "22 Sept - 20 Okt 2024" }) => {
  return (
    <div className="border-[2px] border-black rounded-xl w-[22rem] shadow-sm justify-between">
      <div className="relative rounded-t-xl overflow-hidden h-32 w-full">
        <Image
          src="/placeholder.svg"
          alt="Kelas"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <span className="absolute top-2 left-2 bg-gray-100 px-2 py-1 text-sm font-medium rounded-md">
          {label}
        </span>
      </div>

      <div className="p-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{judul}</h2>
        <p className="text-sm mb-4 pb-10">{tanggal}</p>
        
        <button className="w-full py-2 border-[2px] border-black rounded-md hover:bg-gray-100">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};

export default Class;
