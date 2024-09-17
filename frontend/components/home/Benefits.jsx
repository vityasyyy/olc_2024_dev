import Container from "../global/Container";
import Tag from "../global/Tag";

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
          <Tag className="">Benefits</Tag>
          <p className="font-semibold">Hal yang akan kamu dapatkan disini</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </Container>
    </>
  );
};

const Card = ({ judul, children, className }) => {
  return (
    <div className={`flex h-fit w-full flex-col gap-4 rounded-lg border-[1px] border-white bg-custom-blue-darker p-6 text-white ${className}`}>
      <h1 className="text-3xl font-semibold sm:text-4xl">{judul}</h1>
      {children}
    </div>
  );
};

export default Benefits;
