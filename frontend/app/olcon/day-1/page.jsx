import Avatar from "@/components/global/Avatar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";
import Card from "@/components/olcon/Card";
import RegisterButton from "@/components/olcon/RegisterButton";
import BackButtonOLCon from "@/components/olcon/BackButtonOLCon";

const OLConDetail = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olcon`, {
    cache: "no-cache",
  });
  const olconJSON = await response.json();
  const olcon = olconJSON.olcon;
  const enrolledAmount = 40 - (await olcon.slots);
  const progress = (enrolledAmount * 100) / 40;

  return (
    <>
      <ContainerLarge className="text-custom-blue-dark" parentClass="bg-white">
        <div className="inline-flex flex-row gap-12">
          <BackButtonOLCon />

          {/* href to page two */}
          <Link href="day-2">
            <Button variant="link" className="p-0">
              Day 2
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <h1 className="my-8 text-4xl font-bold">{`${olcon.title}: Day 1`}</h1>

        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="flex flex-col gap-6 sm:flex-row lg:w-1/2">
            <Avatar
              nama={olcon.sesi[0].mentor?.nama}
              deskripsi={olcon.sesi[0].mentor?.deskripsi}
              src={`/olcon/${olcon.sesi[0].mentor?.fotoMentor.filename}`}
              alt={olcon.mentor?.nama}
            />

            <div className="w-full lg:hidden">
              <ClassDescriptionAndProgress
                classDetail={olcon}
                progress={progress}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="hidden w-full lg:block">
              <ClassDescriptionAndProgress
                classDetail={olcon}
                progress={progress}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {olcon.sesi.map((session, index) => (
                <div
                  className="duration-700 animate-in fade-in slide-in-from-bottom-10"
                  key={index}
                >
                  <Card
                    sesi={`${index + 1}`}
                    judul={session.judulSesi}
                    tanggal={new Date(session.waktu).toLocaleDateString(
                      "id-ID",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                    jam={new Date(session.waktu).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    deskripsi={session.deskripsi}
                    kurikulum={session.kurikulum}
                    tempat={session.platform}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerLarge>
    </>
  );
};

const ClassDescriptionAndProgress = ({ classDetail, progress }) => (
  <div className="flex h-full w-full flex-col justify-between gap-6">
    {/* grouping these 2 together */}
    <div className={`flex flex-col gap-4`}>
      {/* class description */}
      <div className="flex flex-col *:text-black">
        <h3 className="font-bold">Tentang Kelas</h3>
        <p>{classDetail.deskripsiKelas}</p>
      </div>

      {/* lokasi dan tempat */}
      <div className="flex flex-col *:text-black">
        <h3 className="font-bold">Waktu dan Lokasi</h3>
        <p>{classDetail.deskripsiKelas}</p>
      </div>
    </div>

    {/* progress bar and enroll button */}
    <div className="flex w-full flex-col gap-1 lg:gap-4">
      <p className="text-base font-semibold text-black lg:text-2xl">
        Slot Tersedia:
      </p>

      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
        <div className="flex w-full items-center gap-3 lg:w-2/3">
          <Progress value={progress} className="h-6 w-full" />
          <p className="whitespace-nowrap text-nowrap text-lg font-semibold text-black">
            {classDetail.slots} / 40
          </p>
        </div>
        <div className="w-full lg:w-1/3">
          <RegisterButton />
        </div>
      </div>
    </div>
  </div>
);

export default OLConDetail;
