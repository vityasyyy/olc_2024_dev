import Container from "../global/Container";
import Tag from "../global/Tag";
import { Calendar, MapPin } from "lucide-react";

const Timeline = async () => {
  const resOlclass = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olclass`);
  const resOlcon = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olcon`);
  const olconJSON = await resOlcon.json();
  const olcon = await olconJSON.olcon;
  const olclass = await resOlclass.json();

  return (
    <>
      <Container parentClass="bg-white" className="flex flex-col gap-6">
        <Tag blue>Timeline</Tag>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card objectOlCon={olcon} idx={0} />
          {olclass.map((item, key) => (
            <Card objectOlClass={item} idx={key} key={key} smallCard />
          ))}
          <Card objectOlCon={olcon} idx={1} />
        </div>
      </Container>
    </>
  );
};

const Card = ({
  idx = 0,
  objectOlCon,
  objectOlClass,
  className,
  smallCard = false,
}) => {
  // Create a Date object
  let dateObj;
  if (smallCard) {
    dateObj = new Date(objectOlClass?.sesi[idx].waktu);
  } else {
    dateObj = new Date(objectOlCon.sesi[idx].waktu);
  }

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
    <div
      className={`group relative col-span-1 flex h-fit ${smallCard || "min-h-64 sm:col-span-2 lg:col-span-4"} ${smallCard ? "bg-custom-blue-dark text-white" : "bg-custom-blue-light text-custom-blue-dark"} col-span-1 w-full flex-col justify-end rounded-md p-3 pt-14 ${className}`}
    >
      {/* day label */}
      <p
        className={`absolute left-3 top-3 mb-4 w-fit rounded-md ${smallCard ? "bg-custom-blue-light text-black" : "bg-custom-blue-dark text-white"} px-4 py-1 text-sm`}
      >
        {smallCard
          ? `Day ${idx + 2}`
          : idx === 1
            ? `Day ${idx + 5}`
            : `Day ${idx + 1}`}
      </p>

      <h1 className={`text-2xl font-semibold`}>
        {smallCard ? "OLClass" : "OLCon"}
      </h1>

      {/* tanggal dan lokasi */}
      <div className="mt-4 flex flex-col gap-2 text-sm font-medium">
        <p className="flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          <span className="group-hover:animate-shake transition duration-300 ease-in-out">
            {date}
          </span>
        </p>
        <p className="flex items-center">
          <MapPin className="mr-2 h-4 w-4" />
          <span className="group-hover:animate-shake-delay transition duration-300 ease-in-out">
            {smallCard
              ? objectOlClass?.sesi[0].platform
              : objectOlCon?.sesi[idx].Lokasi}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Timeline;
