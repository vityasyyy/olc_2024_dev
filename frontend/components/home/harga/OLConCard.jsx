import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import OLConButton from "@/components/home/harga/OLConButton";

const Card = ({
  // key = 1, olconvention only
  // key = 2, olconvention + olclass
  idx,
  judul = "Introduction to IT World",
  description = [""],
  href = "#",
  src = "/hero/macbook.png",
}) => {
  return (
    // 2 divs that will always be square
    <div className="relative w-full overflow-hidden rounded-lg pb-[100%] min-[380px]:pb-[50%] sm:mx-auto sm:pb-[30%] md:h-96 md:w-full md:pb-[50%]">
      {/* image */}
      <Image
        src={src}
        fill
        className="z-0 object-contain"
        alt="OLConvention"
      ></Image>

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-custom-blue-darker to-transparent" />

      {/* content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 text-white">
        {/* judul */}
        <h1 className="text-3xl font-semibold sm:text-4xl">{judul}</h1>

        {/* bullet points */}
        <div className="my-4 flex flex-col gap-2">
          <ul className="ml-4 flex list-disc flex-col gap-2">
            {description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>

        <OLConButton idx={idx} />
      </div>
    </div>
  );
};

export default Card;
