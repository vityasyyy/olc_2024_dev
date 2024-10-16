import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const OLConCard = ({ object, className, href, idx = 0 }) => {
  return (
    // 2 divs that will always be square
    <div
      className={`group relative h-full w-full overflow-hidden rounded-lg shadow-sm transition-all hover:-translate-y-[1px] hover:shadow-xl sm:mx-auto ${className}`}
    >
      <Image
        src={object.sesi[idx].mentor?.fotoMentor.url || "/placeholder.svg"}
        alt="OLConvention"
        fill
        sizes={`100%`}
        priority
        className="z-0 object-cover"
      ></Image>

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-custom-blue-darker to-transparent" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-3 text-white">
        {/* day label */}
        <p className="absolute left-3 top-3 mb-4 w-fit rounded-md bg-custom-blue-dark px-4 py-1 text-sm text-white">
          Day {idx + 1}
        </p>

        {/* allat text and stuff */}
        <p>{object.sesi[idx].mentor.nama}</p>
        <h1 className="mb-2 text-xl font-semibold transition-all group-hover:text-custom-blue-light sm:text-2xl">
          {object.sesi[idx].judulSesi}
        </h1>

        <Link href={href} className={`ml-auto`}>
          <Button
            variant={`secondary`}
            className={`bg-custom-blue text-black hover:bg-custom-blue/80`}
          >
            Detail Acara
          </Button>
        </Link>
      </div>
    </div>
  );
};
