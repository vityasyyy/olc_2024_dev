import ContainerLarge from "@/components/global/ContainerLarge";
import BackButton from "@/components/global/BackButton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

export default function Loading() {
  return (
    <>
      <ContainerLarge className="text-custom-blue-dark" parentClass="bg-white">
        <BackButton black />
        <Skeleton className="my-8 h-9 w-1/3" />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-4 lg:flex-row">
          {/* left side, speaker and image section */}
          <Skeleton className="h-full w-full rounded-xl" />

          {/* right side */}
          <div className="flex w-full flex-col gap-4 lg:col-span-3">
            <Skeleton className="h-6 w-64" />

            {/* group progress and button together */}
            <div className="grid grid-cols-1 gap-4 md:hidden md:grid-cols-3 lg:grid">
              {/* progress bar */}
              <div className="col-span-2 flex w-full flex-row items-center gap-3">
                <Progress value={0} className="w-full" />
                <Skeleton className="h-8 w-12" />
              </div>

              {/* daftar sekarang */}
              <Button variant="secondary" disabled className="w-full">
                <Skeleton className={`h-6 w-full`} />
              </Button>
            </div>

            {/* session cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </ContainerLarge>
    </>
  );
}

function Card() {
  return (
    <div
      className={`flex h-full min-h-64 w-full flex-col justify-between rounded-xl border-[2px] border-custom-blue-dark p-4 text-left shadow-sm transition-all hover:bg-custom-blue-light/30`}
    >
      <Skeleton className="h-4 w-1/3" />

      <div className="flex flex-col gap-1">
        <Skeleton className="h-7" />
        <div className="flex justify-between text-sm font-medium">
          <div className="flex w-full flex-col gap-1">
            <Skeleton className="h-4 w-1/5" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
