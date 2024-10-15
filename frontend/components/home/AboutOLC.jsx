import Container from "../global/Container";
import Image from "next/image";
import Tag from "../global/Tag";

const AboutOLC = () => {
  return (
    <Container
      id="#about"
      parentClass="bg-white"
      className="flex flex-col content-center gap-6"
    >
      {/* starting tag */}
      <Tag blue>Tentang OLC</Tag>

      {/* header text */}
      <h1 className="text-4xl font-semibold sm:font-medium">
        OmahTI Learning Center is Here!
      </h1>

      <div className="flex flex-col gap-6 md:mt-4 md:flex-row">
        {/* big image */}
        <div className="relative mx-auto my-4 aspect-video w-full max-w-[30rem] sm:my-0">
          <Image
            src="/hero/macbook.png"
            className={`object-contain`}
            sizes={`(max-width: 640px) 100%, 120%`}
            fill
            alt={`OLCon 2023`}
          />
        </div>

        {/* body text */}
        <div className="flex flex-col gap-6">
          <p className="text-center font-semibold sm:text-2xl md:text-left">
            Pelatihan Hardskill IT bersama Profesional langsung bersama industri
          </p>
          <div className="flex gap-4">
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              placeat hic, quam natus velit neque. Ex, id praesentium
              perspiciatis est modi debitis iste magni dolorum cupiditate labore
              magnam odit eos.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutOLC;
