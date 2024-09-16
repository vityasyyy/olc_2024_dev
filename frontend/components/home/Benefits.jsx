import Container from "../global/Container";
import Tag from "../global/Tag";

const Benefits = () => {
  return (
    <>
      <Container parentClass="bg-[#8E8E8E]" className="flex flex-col gap-6">
        {/* tags */}
        <div className="flex flex-col gap-4">
          <Tag className="text-black">Benefits</Tag>
          <p className="font-semibold">Hal yang akan kamu dapatkan disini</p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row">
          <Card
            judul="Hands On Project"
            text="memungkinkan pembelajaran praktis yang memperkuat keterampilan, kreativitas, dan pemahaman melalui pengalaman langsung serta kolaborasi, mendorong inovasi dan problem-solving efektif dalam situasi nyata."
          />
          <Card
            judul="Sertifikat"
            text="memungkinkan pembelajaran praktis yang memperkuat keterampilan, kreativitas, dan pemahaman melalui pengalaman langsung serta kolaborasi, mendorong inovasi dan problem-solving efektif dalam situasi nyata."
          />
        </div>
      </Container>
    </>
  );
};

const Card = ({ judul, text }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-2 bg-[#797979] p-4 text-white">
      <h1 className="text-3xl font-semibold sm:text-4xl">{judul}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Benefits;
