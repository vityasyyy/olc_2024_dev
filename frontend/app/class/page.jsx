import axios from "axios";
import Navbar from "@/components/global/Navbar";
import Card from "@/components/class/Card";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";
import Footer from "@/components/global/Footer";

const Class = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/olclass`,
  );

  const classes = await response.data;
  return (
    <>
      <Navbar loggedIn />
      <ContainerLarge parentClass="bg-white">
        <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
          Halo,
          <br />
            <p className="animate-in fade-in slide-in-from-right-5 duration-700">Gisellma Kopassus</p>
        </h1>

        <Tag blue className="text-custom-blue-dark">
          OLClass
        </Tag>

        <p className="pt-10 text-xl font-bold text-custom-blue-dark sm:text-2xl">
          Kelas Tersedia
        </p>
        <p className="pb-6 font-medium">
          Kamu hanya dapat memilih satu kelas dan pendaftar akan langsung
          mendapat akses OLConvention
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((item) => (
              <Card
                label={item.title}
                judul={item.title} //Use appropriate fields from the data
                tanggal={item.waktu ? item.waktu : "TBA"} // Example of how you can handle missing fields
                href={`/class/${item.slug}`}
                className="delay-200 duration-700 ease-in animate-in fade-in slide-in-from-right-5"
              />
          ))}
        </div>
      </ContainerLarge>
      <Footer />
    </>
  );
};

export default Class;
