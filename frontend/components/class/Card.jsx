import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  label = "Nama Pelajaran",
  judul = "Judul",
  tanggal = "22 Sept - 20 Okt 2024",
  href = "/",
}) => {
  return (
    <div className="h-full w-full justify-between rounded-xl border-[1px] border-custom-blue-dark shadow-sm">
      <div className="relative h-32 w-full overflow-hidden rounded-t-xl">
        <Image
          src="/placeholder.svg"
          alt="Kelas"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        {/* label */}
        <span className="bg-custom-blue-light absolute left-3 top-3 rounded-md px-2 py-1 text-sm font-medium">
          {label}
        </span>
      </div>

      <div className="flex flex-col gap-2 p-3">
        <h2 className="text-xl font-bold sm:text-2xl">{judul}</h2>
        <p className="text-sm">{tanggal}</p>

        <Button className="w-full bg-custom-blue-dark text-white hover:bg-custom-blue-dark/90" asChild>
          <Link href={href}>Lihat Kelas</Link>
        </Button>
      </div>
    </div>
  );
};

export default Card;
