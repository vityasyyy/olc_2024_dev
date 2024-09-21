import ContainerLarge from "../global/ContainerLarge";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full bg-custom-blue-dark">
      <ContainerLarge 
      diamonds
      className="flex h-[80vh] flex-col justify-between gap-0 sm:justify-around">
        {/* hidden block for positioning */}
        <div className="hidden sm:block"></div>

        {/* title text */}
        <div className="z-20 mt-12 flex w-full flex-col sm:mt-0 sm:max-w-[60vh] md:max-w-none md:gap-1">
          <h1 className="text-center text-2xl font-medium text-white sm:text-start sm:text-4xl lg:text-6xl">
            Tingkatkan Skill IT Bersama{" "}
          </h1>
          <h1 className="text-center text-2xl font-bold text-white sm:text-start sm:text-4xl lg:text-6xl">
            Professional Industri
          </h1>
        </div>

        {/* toast and cta */}
        <div className="z-20 mx-auto flex w-full max-w-sm flex-col items-center gap-2.5 rounded-lg bg-white p-2.5 text-sm sm:mx-0 sm:w-fit sm:max-w-xl sm:flex-row sm:px-4">
          <p className="text-center font-semibold sm:text-nowrap">
            Gabung dengan OLClass sekarang
          </p>
          <Link href="/auth/login">
          <Button className="w-full font-medium sm:w-fit">
            Daftar OLClass
          </Button>
          </Link>
        </div>

        {/* circle for background */}
        <Image
          src="/hero/circle.svg"
          className="absolute bottom-[20%] left-[-6rem] hidden sm:block"
          alt="circle"
          priority
          width={250}
          height={250}
        />
      </ContainerLarge>
    </div>
  );
}
