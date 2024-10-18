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
          fill
          sizes={`100%`}
          className="rounded-t-xl object-cover"
        />
        <span className="absolute left-3 top-3 w-1/2 rounded-md bg-gray-100 px-2 py-1 text-sm font-medium">
          <Skeleton className="h-4 w-full" />
        </span>
      </div>

      <div className="flex flex-col gap-2 p-3">
        <Skeleton className="h-8 w-full " />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <Button
          className="ml-auto border-custom-blue-dark px-4"
          variant="outline"
        >
          <Skeleton className="h-4 w-24" />
        </Button>
      </div>
    </div>
  );
};

export default CardLoading;
