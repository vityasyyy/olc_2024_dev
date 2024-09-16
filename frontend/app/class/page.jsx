"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";

const Class = () => {
  const Router = useRouter();
  return (
    <>
      <Navbar loggedIn />
      <ContainerLarge>
        <h1 className="pb-10 text-3xl font-semibold sm:text-4xl">
          Halo,
          <br />
          Sultan Tampan Suyudi
        </h1>

        <Tag>OLClass</Tag>

        <p className="pt-10 text-xl font-bold sm:text-2xl">Kelas Tersedia</p>
        <p className="pb-6">
          Kamu hanya dapat memilih satu kelas dan pendaftar akan langsung
          mendapat akses OLConvention
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
      </ContainerLarge>
    </>
  );
};

const Card = ({
  label = "Software Engineering",
  judul = "Judul",
  tanggal = "22 Sept - 20 Okt 2024",
}) => {
  return (
    <div className="w-full justify-between rounded-xl border-[2px] border-black shadow-sm">
      <div className="relative h-32 w-full overflow-hidden rounded-t-xl">
        <Image
          src="/placeholder.svg"
          alt="Kelas"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <span className="absolute left-2 top-2 rounded-md bg-gray-100 px-2 py-1 text-sm font-medium">
          {label}
        </span>
      </div>

      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">{judul}</h2>
        <p className="mb-4 pb-10 text-sm">{tanggal}</p>

        <button className="w-full rounded-md border-[2px] border-black py-2 hover:bg-gray-100">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};

export default Class;
