import Container from "../global/Container";
import Tag from "../global/Tag";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Classes = () => {
  return (
    <Container
      parentClass="bg-custom-blue-dark"
      className="flex flex-col gap-6"
    >
      {/* tag */}
      <div className="flex flex-col gap-4 text-white">
        <Tag>OLClass</Tag>
        <p className="font-medium">
          Kelas dengan bimbingan profesional industri
        </p>
      </div>

      {/* class cards */}
      <div className="flex flex-col gap-6">
        <Card label="Software Engineering" />
        <Card label="Cyber Security" />
        <Card label="Data Science" />
        <Card label="UI/UX" />
      </div>
    </Container>
  );
};

const Card = ({
  label = "Software Engineering",
  judul = "Nama Judul Kelas",
  nama = "Fahmi Shampoerna",
  description = "Project Manager at TelkomBeta",
  materi = "Banyak banget yang dipelajari",
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex h-72 w-full flex-col overflow-hidden rounded-t-2xl sm:h-48 sm:flex-row">
          {/* image */}
          <div className="relative h-1/2 w-full sm:h-full sm:w-[200px]">
            <Image src="placeholder.svg" layout="fill" objectFit="cover" />
          </div>
          <div className="flex h-1/2 w-full flex-col justify-between gap-1 bg-custom-blue-darker p-4 text-white sm:h-full sm:w-full">
            {/* label */}
            <p className="p-1 text-sm">{label}</p>

            <div className="flex flex-col gap-1">
              {/* title */}
              <h1 className="text-2xl font-semibold sm:text-4xl">{judul}</h1>
              {/* moderator */}
              <p className="text-sm sm:text-lg">Moderator: {nama}</p>
              {/* description */}
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Materi yang akan kamu pelajari</AccordionTrigger>
            <AccordionContent>{materi}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Classes;
