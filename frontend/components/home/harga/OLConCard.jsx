import Image from "next/image";
import OLConButton from "@/components/home/harga/OLConButton";

const Card = ({
  // key = 1, olconvention only
  // key = 2, olconvention + olclass
  idx,
  judul = "Introduction to IT World",
  description = [""],
  // href = "#",
  src = "/hero/macbook.png",
}) => {
  return (
    // 2 divs that will always be square
    <div className="group relative h-80 w-full overflow-hidden rounded-lg pb-[100%] ease-in-out min-[380px]:pb-[50%] sm:mx-auto sm:pb-[30%] md:h-96 md:w-full md:pb-[50%]">
      {/* image */}
      <Image
        src={src}
        fill
        sizes={`100%`}
        className="z-0 object-cover"
        alt="OLConvention"
      ></Image>

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-custom-blue-darker to-transparent" />

      {/* content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 text-white">
        {/* judul */}
        <h1 className="text-3xl font-semibold sm:text-4xl">{judul}</h1>

        {/* bullet points */}
        <ul className="mb-2 ml-4 flex max-h-0 list-disc flex-col gap-0.5 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:opacity-100 sm:my-4 sm:gap-2">
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>

        <OLConButton idx={idx} />
      </div>
    </div>
  );
};

export default Card;
