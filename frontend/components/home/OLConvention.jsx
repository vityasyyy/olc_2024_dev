import Container from "../global/Container";
import Tag from "../global/Tag";
import { Card } from "@/components/global/OlConCard";

const OLConvention = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olcon`, {
    cache: "no-cache",
  });
  const olconJSON = await response.json();
  const olcon = await olconJSON.olcon;

  return (
    <>
      <Container parentClass="bg-white" className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Tag blue>OLConvention</Tag>
          <p className="font-semibold">
            Seminar offline dengan professional di bidang IT
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <Card object={olcon} idx={0} />
          <Card object={olcon} idx={1} />
        </div>
      </Container>
    </>
  );
};

export default OLConvention;
