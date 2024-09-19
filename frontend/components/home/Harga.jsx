import Container from "../global/Container";
import Tag from "../global/Tag";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Harga = () => {
  let olcononly = ["Gratis biaya pendaftaran", "40 Kursi Tersedia"];
  let olconolclass = [
    "Gratis slot kursi OLClas",
    "Sertifikat",
    "Hands on Project",
    "5 Days Mini-Bootcamp",
  ];

  return (
    <>
      <Container parentClass="bg-white" className="flex flex-col gap-6">
        <Tag blue>Harga</Tag>
        <div className="flex flex-col gap-6 md:flex-row">
          <Card judul="OLConvention Only" description={olcononly} />
          <Card judul="OLConvention + OLClass" description={olconolclass} />
        </div>
      </Container>
    </>
  );
};

const Card = ({
  judul = "Introduction to IT World",
  description,
  href = "#",
  src = "/hero/macbook.png",
}) => {
  return (
    // 2 divs that will always be square
    <div className="relative w-full overflow-hidden rounded-lg pb-[100%] sm:mx-auto sm:h-96 sm:w-96 sm:pb-0 md:w-full md:pb-[50%]">
      {/* image */}
      <Image
        src={src}
        width={500}
        height={500}
        className="layout-fill z-0 object-cover"
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

        <Link href="/auth/login" className="w-full">
          <Button className="w-full">Daftar Sekarang</Button>
        </Link>
      </div>
    </div>
  );
};

export default Harga;
