import ContainerLarge from "@/components/global/ContainerLarge";
import BackButtonOLCon from "@/components/olcon/BackButtonOLCon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Avatar from "@/components/global/Avatar";
import Card from "@/components/olcon/Card";
import { Progress } from "@/components/ui/progress";
import RegisterButton from "@/components/olcon/RegisterButton";

const OLConDetail = async ({ DAY }) => {
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
        {/* href arrows */}
        <div className="inline-flex flex-row gap-12">
          {DAY === 0 ? (
            <>
              <BackButtonOLCon />
              {/* href to page two */}
              <Link href="/olcon/day-2">
                <Button variant="link" className="p-0">
                  Day 2
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href={`/olcon/day-1`}>
                <Button variant="link" className="p-0">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Day 1
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* title */}
        <h1 className="my-8 text-4xl font-bold">{olcon.sesi[DAY].judulSesi}</h1>

        {/* main content */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="flex auto-cols-max flex-col gap-6 sm:flex-row">
            <Avatar
              nama={olcon.sesi[DAY].mentor?.nama}
              deskripsi={olcon.sesi[DAY].mentor?.deskripsi}
              src={`/olcon/${olcon.sesi[DAY].mentor?.fotoMentor.filename}`}
              alt={olcon.mentor?.nama}
            />

            {/* ON SMALL SCREENS */}
            <div className="w-full lg:hidden">
              <ClassDescriptionAndProgress
                classDetail={olcon}
                DAY={DAY}
                progress={progress}
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-6 lg:col-span-3">
            {/* ON LARGE SCREENS */}
            <div className="hidden w-full lg:block">
              <ClassDescriptionAndProgress
                classDetail={olcon}
                DAY={DAY}
                progress={progress}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {olcon.sesi[DAY].materi.map((session, index) => (
                <div
                  className="duration-700 animate-in fade-in slide-in-from-bottom-10"
                  key={index}
                >
                  <Card
                    sesi={`${index + 1}`}
                    judul={session.materiJudul}
                    tanggal={new Date(session.jamBerapa).toLocaleDateString(
                      "id-ID",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                    jam={new Date(session.jamBerapa).toLocaleTimeString(
                      "id-ID",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}
                    tempat={session.tempat}
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
const ClassDescriptionAndProgress = ({ classDetail, DAY, progress }) => {
  // Create a Date object
  const dateObj = new Date(classDetail.sesi[DAY].waktu);

  // Get the time in HH:mm format
  const time = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get the date in "2 October 2024" format
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const date = dateFormatter.format(dateObj);

  return (
    <div className="flex h-full w-full flex-shrink flex-col justify-between gap-6">
      {/* grouping these 2 together */}
      <div className={`flex flex-col gap-4`}>
        {/* class description */}
        <div className="flex flex-col *:text-black">
          <h3 className="font-semibold lg:mb-2 lg:text-2xl">Tentang Seminar</h3>
          <p>{classDetail.sesi[DAY].deskripsi}</p>
        </div>

        {/* lokasi dan tempat */}
        <div className="flex flex-col *:text-black">
          <h3 className="font-semibold lg:mb-2 lg:text-2xl">
            Waktu dan Lokasi
          </h3>
          <p>
            {date} {time}
          </p>
          <p>{classDetail.sesi[DAY].Lokasi}</p>
        </div>
      </div>

      {/* progress bar and enroll button */}
      <div className="flex w-full flex-col gap-1 lg:gap-4">
        <p className="text-base font-semibold text-black lg:text-2xl">
          Jumlah Pendaftar:
        </p>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
          <div className="flex w-full items-center gap-3 lg:w-2/3">
            <Progress value={progress} className="h-6 w-full" />
            <p className="whitespace-nowrap text-nowrap text-lg font-semibold text-black">
              {40 - classDetail.slots} / 40
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <RegisterButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OLConDetail;
