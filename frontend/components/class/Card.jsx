import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";

const Card = ({
  label = "Nama Pelajaran",
  judul = "Judul",
  tanggal = "22 Sept - 20 Okt 2024",
  href = "/",
  src = placeholder,
  imageAlt = "Gambar Kelas OLC",
}) => {
  return (
    <div className="group grid h-full max-h-[21rem] w-full auto-rows-fr overflow-hidden rounded-xl border-[1px] border-custom-blue-dark shadow-sm transition-all hover:shadow-lg sm:max-h-[23rem]">
      <CardImage src={src} alt={imageAlt} label={label} />
      <CardContent judul={judul} tanggal={tanggal} href={href} />
    </div>
  );
};

const CardImage = ({ src, alt, label }) => (
  <div className="relative h-full w-full overflow-hidden rounded-t-xl">
    <Image
      src={src}
      alt={alt}
      className="layout-fill h-full w-full rounded-t-xl object-cover"
    />
    <span className="absolute left-3 top-3 mr-8 rounded-md bg-custom-blue px-2 py-1 text-sm font-medium">
      {label}
    </span>
  </div>
);

const CardContent = ({ judul, tanggal, href }) => (
  <div className="flex h-full flex-col justify-between gap-2 p-3">
    <div className="flex flex-col">
      <h2 className="text-xl font-bold transition-all group-hover:text-custom-blue-dark sm:text-2xl">
        {judul}
      </h2>
      <p className="text-sm">{tanggal}</p>
    </div>
    <Link href={href} className="ml-auto mt-auto">
      <Button variant="secondary">Lihat Kelas</Button>
    </Link>
  </div>
);

export default Card;
