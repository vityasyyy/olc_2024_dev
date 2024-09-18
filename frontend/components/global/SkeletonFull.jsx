import { Skeleton } from "../ui/skeleton";

const SkeletonFull = () => {
  return (
    <>
      <Skeleton className="my-8 h-12 w-1/3" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>

    </>
  );
};

export default SkeletonFull;
