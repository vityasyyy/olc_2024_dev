import Container from "../global/Container";
import Tag from "../global/Tag";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Classes = async () => {
  const responses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olclass`, {
    cache: "no-cache",
  });
  const classes = await responses.json();

  return (
    <Container
      parentClass="bg-custom-blue-dark"
      className="flex flex-col gap-6"
      diamonds
    >
      {/* tag */}
      <div className="flex flex-col gap-4 text-white">
        <Tag>OLClass</Tag>
        <p className="font-medium">
          Kelas dengan bimbingan profesional industri
        </p>
      </div>

      {/* olclass cards */}
      <div className="flex flex-col gap-6">
        {classes.map((item) => (
          <Card
            label={item.divisi}
            judul={item.title}
            nama={item.mentor.nama || "TBA"}
            description={item.mentor.deskripsi || "TBA"}
            key={item._id}
            src={item.mentor.fotoMentor.coverKelas || "/placeholder.svg"}
            materi={item.sesi.map((sesi) => sesi.judulSesi).join(", ")}
          />
        ))}
      </div>
    </Container>
  );
};

const Card = ({
  label = "Software Engineering",
  judul = "Nama Judul Kelas",
  nama = "TBA",
  src = "placeholder.svg",
  description = "Project Manager at TelkomBeta",
  materi = "Banyak banget yang dipelajari",
}) => {
  return (
    <>
      {/* wrapper for card and accordion */}
      <div className="flex flex-col gap-2">
        {/*  */}
        <div className="flex min-h-80 w-full flex-col overflow-hidden rounded-t-2xl sm:min-h-0 sm:h-48 sm:flex-row">
          {/* image */}
          <div className="relative h-40 w-full overflow-hidden sm:h-full sm:w-[200px]">
            <Image
              src={src}
              fill
              sizes={`100%`}
              className="object-cover scale-110"
              alt="Mentor Image"
            />
          </div>
          <div className="flex min-h-40 w-full flex-col justify-between gap-1 bg-custom-blue-darker p-4 text-white sm:h-full sm:w-full">
            {/* label */}
            <p className="p-1 text-sm">{label}</p>

            <div className="flex flex-col gap-1">
              {/* title */}
              <h1 className="text-2xl font-semibold sm:text-4xl">{judul}</h1>
              {/* moderator */}
              <p className="text-sm sm:text-lg">Mentor: {nama}</p>
              {/* description */}
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className={`border-b-0`}>
            <AccordionTrigger
              className={`rounded-md bg-neutral-50 px-5 py-3 transition-all hover:bg-neutral-50/90 hover:text-black/90 hover:no-underline`}
            >
              Materi yang akan kamu pelajari
            </AccordionTrigger>
            <AccordionContent
              className={`font-mediunm mt-2 min-h-24 rounded-lg bg-custom-blue-light px-5 py-5`}
            >
              {materi}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Classes;
