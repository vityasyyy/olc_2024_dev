import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

const CardLoading = () => {
  return (
    <div className="h-full w-full justify-between rounded-xl border-[1px] border-custom-blue-dark shadow-sm">
      <div className="relative h-32 w-full overflow-hidden rounded-t-xl">
        <Image
          src="/placeholder.svg"
          alt="Kelas"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <span className="absolute left-3 top-3 w-1/2 rounded-md bg-gray-100 px-2 py-1 text-sm font-medium">
          <Skeleton className="h-4 w-full" />
        </span>
      </div>

      <div className="flex flex-col gap-2 p-3">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <Button className="w-full border-custom-blue-dark" variant="outline">
          <Skeleton className="h-4 w-full" />
        </Button>
      </div>
    </div>
  );
};

export default CardLoading;
