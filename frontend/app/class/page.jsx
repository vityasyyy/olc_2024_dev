import axios from "axios";
import Navbar from "@/components/global/Navbar";
import Card from "@/components/class/Card";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";
import CardLoading from "@/components/class/CardLoading";
import Footer from "@/components/global/Footer";
import Name from "@/components/class/Name";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const Class = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/olclass`,
  );
  let loading = false;
  const classes = await response.data;

  return (
    <>
      <Navbar loggedIn />
      <ContainerLarge parentClass="bg-white">
        <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
          Halo,
          <br />
          {loading ? (
            <>
              <Skeleton className="mt-2 h-8 w-96" />
            </>
          ) : (
            <Name>Gisellma Kopassus</Name>
          )}
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

        <Suspense fallback={<CardLoading />}>
          <div
            animate="visible"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          >
            {classes.map((item) => (
              <div initial="hidden" animate="visible">
                <Card
                  label={item.title}
                  judul={item.title} //Use appropriate fields from the data
                  tanggal={item.waktu ? item.waktu : "TBA"} // Example of how you can handle missing fields
                  href={`/class/${item.slug}`}
                />
              </div>
            ))}
          </div>
        </Suspense>
      </ContainerLarge>
      <Footer />
    </>
  );
};

export default Class;
