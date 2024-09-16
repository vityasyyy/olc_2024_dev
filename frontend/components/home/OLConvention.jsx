import Container from "../global/Container";
import Tag from "../global/Tag";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const OLConvention = () => {
  return (
    <>
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Tag>OLConvention</Tag>
          <p className="font-semibold">
            Seminar offline dengan professional di bidang IT
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <Card />
          <Card />
        </div>
      </Container>
    </>
  );
};

const Card = ({
  day = "1",
  judul = "Introduction to IT World",
  nama = "Argya Vityasy",
  waktu = "Kamis 24 November 2024",
}) => {
  return (
    // 2 divs that will always be square
    <div className="relative w-full pb-[100%] sm:mx-auto sm:h-96 sm:w-96 sm:pb-0 md:w-full md:pb-[50%]">
      <div className="absolute inset-0 flex flex-col justify-end border border-black bg-[#656161] p-3 text-white">
        {/* day label */}
        <p className="absolute left-3 top-3 mb-4 w-fit rounded-md bg-white px-4 py-1 text-sm text-black">
          Day {day}
        </p>

        {/* allat text and stuff */}
        <p>{nama}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{judul}</h1>

        {/* tanggal dan lokasi */}
        <div className="flex mt-4 flex-col gap-2 text-xs sm:flex-row sm:justify-between sm:items-center lg:text-base">
          <p className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{waktu}</span>
          </p>
          <p className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            <span>DIKE FMIPA UGM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OLConvention;
