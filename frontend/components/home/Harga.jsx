import Container from "../global/Container";
import Tag from "../global/Tag";
import Card from "@/components/home/harga/OLConCard";

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
          <Card idx={1} judul="OLConvention Only" description={olcononly} />
          <Card
            idx={2}
            judul="OLConvention + OLClass"
            description={olconolclass}
          />
        </div>
      </Container>
    </>
  );
};

export default Harga;
