import Container from "../Container";
import Image from "next/image";

const AboutOLC = () => {
  return (
    <Container className="flex flex-col content-center gap-2">
      {/* starting tag */}
      <div className="flex flex-row content-center gap-2">
        <Image
          className="h-6 w-6"
          src="placeholder.svg"
          width={32}
          height={32}
        />
        <p className="text-sm font-semibold">Tentang OLC</p>
      </div>

      {/* header text */}
      <h1 className="text-4xl font-semibold">
        OmahTI Learning Center is Here!
      </h1>

      <div className="flex flex-col sm:flex-row sm:gap-4 sm:mt-4">
        <Image
          className="mx-auto my-4 h-56 w-56 sm:my-0"
          src="placeholder.svg"
          height={32}
          width={32}
        />

        {/* body text */}
        <div className="flex flex-col gap-4">
          <p className="text-center font-semibold sm:text-xl sm:text-left">
            Pelatihan Hardskill IT bersama Profesional langsung bersama industri
          </p>
          <div className="flex gap-2">
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
