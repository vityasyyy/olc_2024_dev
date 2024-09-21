import Navbar from "@/components/global/Navbar";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";
import Footer from "@/components/global/Footer";
import UserName from "@/components/class/UserName";
import Classes from "@/components/class/Classes";

const Class = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/olclass`, {method: "GET"}
  );

  const classes = await response.json();
  return (
    <>
      <Navbar variant="white" />
      <ContainerLarge parentClass="bg-white">
        <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
          Halo,
          <br />
          <UserName/>
        </h1>

        <Tag blue className="text-custom-blue-dark">
          OLClass
        </Tag>
        <Classes classes={classes}/>
      </ContainerLarge>
      <Footer />
    </>
  );
};

export default Class;
