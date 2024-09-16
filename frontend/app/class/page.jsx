"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";

const Class = () => {
  const Router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [classes, setClasses] = useState([]);

  const fetchAllClass = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/olclass`);
    setClasses(response.data);
  }
  useState(() => {
    fetchAllClass();
  })
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar loggedIn />
      <ContainerLarge>
        <h1 className="pb-10 text-3xl font-semibold sm:text-4xl">
          Halo,
          <br />
          <span className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-in-out`}>
            Sultan Tampan Suyudi
          </span>
        </h1>

        <Tag>OLClass</Tag>

        <p className="pt-10 text-xl font-bold sm:text-2xl">Kelas Tersedia</p>
        <p className="pb-6">
          Kamu hanya dapat memilih satu kelas dan pendaftar akan langsung
          mendapat akses OLConvention
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((item) => (
            <Link key={item._id} href={`/class/${item.slug}`}>
                <Card
                  label={item.title}
                  judul={item.title} //Use appropriate fields from the data
                  tanggal={item.waktu ? item.waktu : "TBA"} // Example of how you can handle missing fields
                />
            </Link>
          ))}
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
        <span className="absolute left-3 top-3 rounded-md bg-gray-100 px-2 py-1 text-sm font-medium">
          {label}
        </span>
      </div>

      <div className="p-3">
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">{judul}</h2>
        <p className="mb-4 pb-10 text-sm">{tanggal}</p>

        <Button className="w-full border-black" variant="outline" asChild>
          <Link href="/auth/register">Daftar Sekarang</Link>
        </Button>
      </div>
    </div>
  );
};

export default Class;
