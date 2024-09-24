import Avatar from "@/components/global/Avatar";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";
import CardDrawer from "@/components/class/slug/Card";
import RegisterButton from "@/components/class/RegisterButton";
import TugasCard from "@/components/class/slug/TugasCard";

const ClassDetail = async ({ params }) => {
  const slug = await params.slug;
  let classDetail;
  try {
    const classResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/olclass/${slug}`,
      { method: "GET" },
    );
    classDetail = await classResponse.json();
  } catch (error) {
    console.error("Error fetching olclass detail:", error);
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
              src={classDetail.mentor?.image}
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
                <p className="text-nowrap text-lg font-semibold text-black">
                  {classDetail.enrolledBy.length} / 40
                </p>
              </div>

              {/* daftar sekarang */}
              <RegisterButton classSlug={slug} />
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
                <p className="text-nowrap text-xl font-semibold text-black">
                  {classDetail.enrolledBy.length}/ 40
                </p>
              </div>

              {/* daftar sekarang */}
              <RegisterButton classSlug={slug} />
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
              <TugasCard href={classDetail.tugas} />
            </div>
          </div>
        </div>
      </ContainerLarge>
    </>
  );
};

export default ClassDetail;
