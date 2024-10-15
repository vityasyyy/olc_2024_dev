import Navbar from "@/components/global/Navbar";
import ContainerLarge from "@/components/global/ContainerLarge";
import { Skeleton } from "@/components/ui/skeleton";
import Tag from "@/components/global/Tag";
import CardLoading from "@/components/class/CardLoading";
import Footer from "@/components/global/Footer";

export default function Loading() {
  return (
    <>
      <Navbar variant={`white`} />
      <ContainerLarge parentClass="bg-white">
        <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
          Halo,
          <br />
          <Skeleton className="mt-2 h-8 w-96" />
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
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </div>
      </ContainerLarge>
      <Footer />
    </>
  );
}
