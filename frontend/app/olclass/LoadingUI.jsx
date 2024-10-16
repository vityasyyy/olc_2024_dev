import { Skeleton } from "@/components/ui/skeleton";
import Tag from "@/components/global/Tag";
import CardLoading from "@/components/class/CardLoading";

export default function Loading() {
  return (
    <>
        <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
          Halo,
          <br />
          <Skeleton className="mt-2 h-8 w-64" />
        </h1>
        <Tag blue className="text-custom-blue-dark">
          OLClass
        </Tag>
        <p className="pt-10 text-xl font-bold text-custom-blue-dark sm:text-2xl">
          Kelas Tersedia
        </p>
        <Skeleton className="mb-2 mt-10 h-8 w-48" />
        <Skeleton className="mb-6 h-6 w-64" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </div>
    </>
  );
}
