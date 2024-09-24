import Avatar from "@/components/global/Avatar";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";
import SessionCard from "@/components/olcon/SessionCard";
import DescriptionCard from "@/components/olcon/DescriptionCard";
import RegisterButton from "@/components/olcon/RegisterButton";

const OLConDetail = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olcon`);
  const olcon = await response.json();
  console.log(olcon.olcon);
  const enrolledAmount = 40 - ((await olcon.olcon.slots) - 60);
  const progress = (enrolledAmount * 100) / 40;

  return (
    <>
      <ContainerLarge className="text-custom-blue-dark" parentClass="bg-white">
        <BackButton black />
        <h1 className="my-8 text-4xl font-bold">Introduction to IT World</h1>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-4 lg:flex-row">
          {/* left side, speaker and image section */}
          <div className="flex flex-row gap-6">
            <Avatar
              nama={olcon.olcon.mentor?.nama}
              alt={olcon.olcon.mentor?.nama}
              deskripsi={olcon.olcon.mentor?.deskripsi}
              src={olcon.olcon.mentor?.fotoMentor}
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
                  {enrolledAmount} / 40
                </p>
              </div>

              {/* daftar sekarang */}
              <RegisterButton />
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
                  {enrolledAmount} / 40
                </p>
              </div>

              {/* daftar sekarang */}
              <RegisterButton />
            </div>

            {/* session cards */}
            <div className="grid grid-cols-1 gap-4 duration-700 animate-in fade-in slide-in-from-bottom-5">
              <SessionCard />
              <DescriptionCard />
            </div>
          </div>
        </div>
      </ContainerLarge>
    </>
  );
};

export default OLConDetail;
