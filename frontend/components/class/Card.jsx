import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  label = "Nama Pelajaran",
  judul = "Judul",
  tanggal = "22 Sept - 20 Okt 2024",
  href = '/'
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
          <Link href={href}>Lihat Kelas</Link>
        </Button>
      </div>
    </div>
  );
};

export default Card;