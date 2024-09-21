import CardLoading from "./CardLoading";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonKelas() {
  return (
    <>
      <Skeleton className="mb-2 mt-10 h-8 w-48" />
      <Skeleton className="mb-6 h-6 w-96" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </div>
    </>
  );
}
