import Container from "../global/Container";
import Tag from "../global/Tag";
import { Calendar, MapPin } from "lucide-react";

const Timeline = () => {
  return (
    <>
      <Container className="flex flex-col gap-6">
        <Tag blue>Timeline</Tag>
        <div className="flex flex-col items-center gap-6">
          {/* wrapper on big screens so it turns into a 4x4 grid */}
          <div className="grid w-full grid-cols-1 gap-6 px-[10%] sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
            <Card smallCard />
            <Card smallCard />
            <Card smallCard />
            <Card smallCard />
          </div>
          <div className="flex w-full flex-col gap-6 px-[10%] lg:px-0">
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    </>
  );
};

const Card = ({
  day = "1",
  judul = "OLConvention",
  waktu = "Kamis 24 November 2024",
  className,
  judulClass,
  smallCard = false,
}) => {
  return (
    // 2 divs that will always be square
    <div
      className={`relative flex h-72 w-full flex-col justify-end rounded-md bg-custom-blue-dark p-3 text-white ${className}`}
    >
      {/* day label */}
      <p className="absolute left-3 top-3 mb-4 w-fit rounded-md bg-custom-blue-light px-4 py-1 text-sm text-black">
        Day {day}
      </p>

      <h1
        className={`text-3xl font-semibold ${judulClass} ${smallCard ? "lg:text-2xl" : "sm:text-4xl"}`}
      >
        {judul}
      </h1>

      {/* tanggal dan lokasi */}
      <div className="mt-4 flex flex-col gap-2 text-sm font-medium">
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
  );
};

export default Timeline;
