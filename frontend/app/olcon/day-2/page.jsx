import Link from "next/link";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/global/Avatar";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import ContainerLarge from "@/components/global/ContainerLarge";
import SessionCard from "@/components/olcon/SessionCard";
import DescriptionCard from "@/components/olcon/DescriptionCard";
import RegisterButton from "@/components/olcon/RegisterButton";

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
      <ContainerLarge
        className="relative text-custom-blue-dark"
        parentClass="bg-white"
      >
        {/* href to page one */}
        <Link href="day-1">
          <Button variant="link" className="px-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Day 1
          </Button>
        </Link>

        <h1 className="my-8 text-4xl font-bold">{olcon.title}: Day 2</h1>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-4 lg:flex-row">
          {/* left side, speaker and image section */}
          <div className="flex flex-row gap-6">
            <Avatar
              nama={olcon.sesi[1].mentor?.nama}
              alt={olcon.sesi[1].mentor?.nama}
              deskripsi={olcon.sesi[1].mentor?.deskripsi}
              src={`/olcon/${olcon.sesi[1].mentor?.fotoMentor.filename}`}
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
              <SessionCard object={olcon.sesi} idx={1} />
              <DescriptionCard object={olcon.sesi} idx={1} />
            </div>
          </div>
        </div>
      </ContainerLarge>
    </>
  );
};

export default OLConDetail;
