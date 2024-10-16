import Container from "../global/Container";
import Tag from "../global/Tag";
import Image from "next/image";
import sysbraykrlogobg from "@/public/hero/sysbraykrlogobg.png";
import gameloftlogobg from "@/public/hero/gameloftlogobg.png";
import telkomsigmalogo from "@/public/hero/telkomsigmalogo.webp";

const Benefits = () => {
  return (
    <>
      <Container
        parentClass="bg-custom-blue-dark text-white"
        className="flex flex-col gap-6"
        diamonds
      >
        {/* tags */}
        <div className="flex flex-col gap-4">
          <Tag className="">Manfaat</Tag>
          <p className="font-semibold">Hal yang akan kamu dapatkan disini</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card judul="Hands On Project">
            <p>
              memungkinkan pembelajaran praktis yang memperkuat keterampilan,
              kreativitas, dan pemahaman melalui pengalaman langsung serta
              kolaborasi, mendorong inovasi dan problem-solving efektif dalam
              situasi nyata.
            </p>
            <p className="font-semibold text-custom-brown-light">
              Top 3 project akan dipresentasikan kepada Ahli
            </p>
          </Card>
          <Card judul="Sertifikat" className="h-full">
            <p>
              memungkinkan pembelajaran praktis yang memperkuat keterampilan,
              kreativitas, dan pemahaman melalui pengalaman langsung serta
              kolaborasi, mendorong inovasi dan problem-solving efektif dalam
              situasi nyata.
            </p>
          </Card>
        </div>

        {/* tags */}
        <div className="mt-8">
          <Tag>Sponsor Kami</Tag>
        </div>

        {/* Flex container for horizontal alignment */}
        <div className="flex flex-row justify-center gap-4 sm:gap-6">
          <SponsorCard src={sysbraykrlogobg} alt="Sysbraykyr" />
          <SponsorCard src={telkomsigmalogo} alt="Telkomsigma" />
          <SponsorCard src={gameloftlogobg} alt="Gameloft" />
        </div>
      </Container>
    </>
  );
};

const Card = ({ judul, children, className }) => {
  return (
    <div
      className={`flex h-fit w-full flex-col gap-4 rounded-lg border-[1px] border-white bg-custom-blue-darker p-6 text-white ${className}`}
    >
      <h1 className="text-3xl font-semibold sm:text-4xl">{judul}</h1>
      {children}
    </div>
  );
};

const SponsorCard = ({ src, alt = "Sponsor Image" }) => {
  return (
    <div className="grid w-48 place-items-center gap-4 rounded-md border-[2px] border-custom-blue-darker bg-custom-blue-light p-4">
      <Image src={src} alt={alt} width={100} height={100} />
    </div>
  );
};
export default Benefits;
