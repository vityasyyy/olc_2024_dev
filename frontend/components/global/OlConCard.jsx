import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export const Card = ({ object, idx = 0 }) => {
  // Create a Date object
  const dateObj = new Date(object.sesi[idx].waktu);

  // Get the time in HH:mm format
  const time = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get the date in "2 October 2024" format
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const date = dateFormatter.format(dateObj);

  return (
    // 2 divs that will always be square
    <div className="relative h-80 w-full overflow-hidden rounded-lg pb-[10%] sm:mx-auto md:w-full md:pb-[50%]">
      <Image
        src={`/olcon/${object.sesi[idx].mentor?.fotoMentor.filename || "../placeholder.svg"}`}
        alt="OLConvention"
        fill
        className="z-0 object-cover"
      ></Image>

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-custom-blue-darker to-transparent" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-3 text-white">
        {/* day label */}
        <p className="absolute left-3 top-3 mb-4 w-fit rounded-md bg-white px-4 py-1 text-sm text-black">
          Day {idx + 1}
        </p>

        {/* allat text and stuff */}
        <p>{object.sesi[idx].mentor.nama}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          {object.sesi[idx].judulSesi}
        </h1>

        {/* tanggal dan lokasi */}
        <div className="mt-4 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between lg:text-base">
          <p className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{date}</span>
          </p>
          <p className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{object.sesi[idx].platform}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
