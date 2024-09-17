import Container from "../global/Container";
import Image from "next/image";
import Tag from "../global/Tag";

const AboutOLC = () => {
  return (
    <Container id="#about" className="flex flex-col content-center gap-6">

      {/* starting tag */}
      <Tag blue>Tentang OLC</Tag>

      {/* header text */}
      <h1 className="text-4xl font-semibold sm:font-medium">
        OmahTI Learning Center is Here!
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 sm:mt-4">
        {/* big image */}
        <div
          className="relative mx-auto my-4 h-72 w-[30rem] sm:shrink-0 sm:my-0"
        >

        <Image
          src="/hero/macbook.png"
          objectFit="contain"
          layout="fill"
        />
        </div>

        {/* body text */}
        <div className="flex flex-col gap-6">
          <p className="text-center font-semibold sm:text-2xl sm:text-left">
            Pelatihan Hardskill IT bersama Profesional langsung bersama industri
          </p>
          <div className="flex gap-4">
            <Image
              className="h-4 w-4 mt-1"
              src="placeholder.svg"
              width={32}
              height={32}
            />
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
