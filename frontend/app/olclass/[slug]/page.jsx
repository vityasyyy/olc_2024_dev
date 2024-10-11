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
      { method: "GET", cache: "no-cache" },
    );
    classDetail = await classResponse.json();
  } catch (error) {
    console.error("Error fetching olclass detail:", error);
  }

  console.log(classDetail);

  const enrolledAmount = 40 - (await classDetail.slots);
  const progress = (enrolledAmount / 40) * 100;

  return (
    <ContainerLarge className="text-custom-blue-dark" parentClass="bg-white">
      <BackButton black />
      <h1 className="my-8 text-4xl font-bold">{classDetail.title}</h1>

      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-6 sm:flex-row lg:w-1/2">
          <Avatar
            nama={classDetail.mentor?.nama}
            deskripsi={classDetail.mentor?.deskripsi}
            src={classDetail.mentor?.image}
            alt={classDetail.mentor?.nama}
          />

          <div className="lg:hidden">
            <ClassDescriptionAndProgress
              classDetail={classDetail}
              progress={progress}
              slug={slug}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="hidden lg:block">
            <ClassDescriptionAndProgress
              classDetail={classDetail}
              progress={progress}
              slug={slug}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {classDetail.sesi.map((session, index) => (
              <div
                className="duration-700 animate-in fade-in slide-in-from-bottom-10"
                key={index}
              >
                <CardDrawer
                  sesi={`${index + 1}`}
                  judul={session.judulSesi}
                  tanggal={new Date(session.waktu).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
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
  );
};

const ClassDescriptionAndProgress = ({ classDetail, progress, slug }) => (
  <div className="flex h-full w-full flex-col justify-between gap-6">
    {/* class description */}
    <div className="flex flex-col *:text-black">
      <h3 className="font-bold">Tentang Kelas</h3>
      <p>{classDetail.deskripsiKelas}</p>
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
            {classDetail.enrolledBy.length} / 40
          </p>
        </div>
        <div className="w-full lg:w-1/3">
          <RegisterButton classSlug={slug} />
        </div>
      </div>
    </div>
  </div>
);

export default ClassDetail;
