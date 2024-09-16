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
            judul="Kelas dengan bimbingan profesional industri"
            text="Kamu akan mendapatkan bimbingan dari para profesional industri yang sudah berpengalaman di bidangnya."
          />
          <Card
            judul="Materi yang akan kamu pelajari"
            text="Kamu akan mendapatkan materi yang akan kamu pelajari selama mengikuti kelas di OLC."
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
