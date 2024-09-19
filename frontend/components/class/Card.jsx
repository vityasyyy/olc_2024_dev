import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";

const Card = ({
  label = "Nama Pelajaran",
  judul = "Judul",
  tanggal = "22 Sept - 20 Okt 2024",
  href = "/",
}) => {
  return (
    <div className="h-full w-full overflow-hidden grid auto-rows-fr rounded-xl border-[1px] border-custom-blue-dark shadow-sm">
      {/* image and label, absolute elements */}
      <div className="relative h-36 w-full overflow-hidden rounded-t-xl">
        <Image
          src={placeholder}
          alt="Gambar Kelas OLC"
          className="layout-fill w-full rounded-t-xl object-cover"
        />
        {/* label */}
        <span className="absolute left-3 top-3 mr-8 rounded-md bg-custom-blue px-2 py-1 text-sm font-medium">
          {label}
        </span>
      </div>

      {/* group bagian bawah bareng */}
      <div className="h-full flex flex-col justify-between gap-2 p-3">
      {/* judul and tanggal */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold sm:text-2xl">{judul}</h2>
          <p className="text-sm">{tanggal}</p>
        </div>

        {/* button */}
        <Link href={href} className="ml-auto mt-auto">
          <Button variant="secondary">Lihat Kelas</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
