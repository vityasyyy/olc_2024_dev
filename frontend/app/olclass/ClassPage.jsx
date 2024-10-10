import Navbar from "@/components/global/Navbar";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";
import Footer from "@/components/global/Footer";
import UserName from "@/components/class/UserName";
import Classes from "@/components/class/Classes";
import WhatsappToast from "@/components/class/WhatsappToast";

const Class = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olclass`, {
    method: "GET",
    cache: "no-cache",
  });

  const classes = await response.json();
  return (
    <>
      <Navbar variant="white" />
      <ContainerLarge parentClass="bg-white">
        <div
          className={`flex flex-col-reverse gap-4 md:flex-row md:justify-between`}
        >
          <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
            Halo,
            <br />
            <UserName />
          </h1>
          <WhatsappToast />
        </div>

        <Tag blue className="text-custom-blue-dark">
          OLClass
        </Tag>
        <Classes classes={classes} />
      </ContainerLarge>
      <Footer />
    </>
  );
};

export default Class;
