import Image from "next/image";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";
import CardDrawer from "@/components/class/slug/Card";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import clsx from "clsx";

const ClassDetail = async ({ params }) => {
  const slug = await params.slug;
  let classDetail;
  try {
    const classResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/olclass/${slug}`, {method: "GET"}
    );
    classDetail = await classResponse.json();
  } catch (error) {
    console.error("Error fetching class detail:", error);
  }

  let progress = (classDetail.enrolledBy.length / classDetail.slots) * 100;

  return (
    <>
      <ContainerLarge className="text-custom-blue-dark" parentClass="bg-white">
        <BackButton black />
        <h1 className="my-8 text-4xl font-bold">{classDetail.title}</h1>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-4 lg:flex-row">
          {/* {classDetail.map} */}
          {/* left side, speaker and image section */}
          <div className="flex flex-row gap-6">
            <Avatar
              nama={classDetail.mentor?.nama}
              deskripsi={classDetail.mentor?.deskripsi}
              // src={classDetail.mentor?.image}
              // src="/hero/macbook.png"
              alt={classDetail.mentor?.nama}
            />

            {/* ON MEDIUM SCREENS */}
            {/* ----------------------------------------------------- */}

            {/* group progress and button together */}
            <div className="hidden w-full flex-col justify-end gap-1 md:flex lg:hidden">
              <p className="text-lg font-semibold text-black">
                Slot Tersedia :
              </p>

              {/* progress bar */}
              <div className="mb-3 flex flex-row items-center gap-3">
                <Progress value={progress} className="h-6 w-full" />
                <p className="text-lg font-semibold text-black text-nowrap">
                  {classDetail.enrolledBy.length} / 40
                </p>
              </div>

              {/* daftar sekarang */}
              <Button variant="secondary" className="w-full">
                Daftar Sekarang
              </Button>
            </div>
            {/* -------------------------------------------------------- */}
          </div>

          {/* right side */}
          <div className="flex w-full flex-col gap-4 lg:col-span-3">
            <p className="text-2xl font-semibold text-black md:hidden lg:block">
              Slot Tersedia :
            </p>

            {/* group progress and button together */}
            <div className="grid grid-cols-1 gap-4 md:hidden md:grid-cols-3 lg:grid">
              {/* progress bar */}
              <div className="col-span-2 flex w-full flex-row items-center gap-3">
                <Progress value={progress} className="w-full" />
                <p className="text-xl font-semibold text-black">
                  {classDetail.enrolledBy.length}/ 40 
                </p>
              </div>

              {/* daftar sekarang */}
              <Button variant="secondary" className="w-full">
                Daftar Sekarang
              </Button>
            </div>

            {/* session cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
              {classDetail.sesi.map((session, index) => (
                <div
                  className="duration-700 animate-in fade-in slide-in-from-bottom-10"
                  key={index}
                >
                  <CardDrawer
                    sesi={`${index + 1}`}
                    judul={session.judulSesi}
                    tanggal={new Date(session.waktu).toLocaleDateString(
                      "id-ID",
                      { day: "2-digit", month: "long", year: "numeric" },
                    )}
                    jam={new Date(session.waktu).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    deskripsi={session.deskripsiLengkap}
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

const Avatar = ({
  src = "/placeholder.svg",
  alt = "Speaker Image",
  nama = "Speaker Name",
  deskripsi = "Speaker Position",
  className,
}) => {
  return (
    <>
      <div
        className={`relative flex h-[60vh] w-full max-w-md flex-col items-end gap-2 overflow-hidden rounded-lg text-custom-blue-darker lg:h-full`}
      >
        <Image
          className="relative h-full w-full rounded-xl"
          src={src}
          alt={alt}
          width={500}
          height={600}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-custom-blue-darker to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 text-white">
          <p className="font-medium lg:text-lg">Speaker</p>
          <p className="text-2xl font-semibold lg:text-3xl">{nama}</p>
          <p className="font-medium lg:text-lg">{deskripsi}</p>
        </div>
      </div>
    </>
  );
};

export default ClassDetail;
