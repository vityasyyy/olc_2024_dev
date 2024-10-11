import ContainerLarge from "../global/ContainerLarge";
import Image from "next/image";
import Toast from "@/components/home/Toast";
import main from "@/public/global/main.png";

export default function Hero() {
  return (
    <div className="relative w-full bg-custom-blue-dark">
      <ContainerLarge
        diamonds
        className="flex h-[80vh] flex-col justify-between gap-0 sm:justify-around"
        parentClass={`overflow-hidden`}
      >
        {/* hero section image main block */}

        {/* orange box */}
        <div
          className={`absolute bottom-0 left-1/2 z-0 h-64 w-48 -translate-x-1/2 transform rounded-t-lg bg-custom-brown-light sm:left-auto sm:right-[5rem] sm:h-[50vh] sm:w-[25vw] sm:translate-x-0`}
        ></div>

        {/* image with a bunch of wrappers */}
        <div
          className={`absolute bottom-[-2rem] left-[45%] z-10 h-96 w-full -translate-x-1/2 overflow-visible sm:left-auto sm:right-[-5rem] sm:h-[90vh] sm:w-[70vw] sm:translate-x-0`}
        >
          <div className={`relative h-full w-full overflow-visible`}>
            {/* actual image */}
            <Image
              src={main}
              className={`z-10 object-cover`}
              fill
              alt={`OmahTI Learning Center`}
              placeholder={`blur`}
              priority
            />
          </div>
        </div>

        {/* hidden block for positioning */}
        <div className="hidden sm:block"></div>

        {/* title text */}
        <div className="z-20 mt-12 flex w-full flex-col items-center sm:mt-0 sm:max-w-[60vh] sm:items-start md:max-w-none md:gap-1">
          <h3
            className={`mb-4 flex flex-row items-center justify-center gap-2 text-center text-xs text-white sm:justify-start sm:text-start`}
          >
            Presented By:
            <Image
              src={`/global/omahti.svg`}
              height={75}
              width={100}
              className={`h-4 w-16 sm:h-5 sm:w-20`}
              alt={`OmahTI Logo`}
            />
          </h3>
          <h1 className="max-w-md text-center text-2xl font-medium text-white sm:text-start sm:text-4xl lg:text-6xl xl:max-w-xl">
            Tingkatkan Skill IT Bersama{" "}
          </h1>
          <h1 className="max-w-md text-center text-2xl font-bold text-white sm:text-start sm:text-4xl lg:text-6xl">
            Professional Industri
          </h1>
        </div>

        <Toast />

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
