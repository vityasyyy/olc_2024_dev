import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TugasCard({ tugasObject = null, className }) {
  const currentTime = Date.now();
  const bukaPenugasan = new Date(tugasObject.bukaPenugasan);
  const dateObj = currentTime <= bukaPenugasan ? bukaPenugasan : new Date(tugasObject.deadline);

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
    // penugasan card
    <div
      className={`col-span-1 flex h-full min-h-64 w-full flex-col justify-between rounded-xl border-[2px] border-custom-blue-dark bg-custom-blue p-4 text-left shadow-sm transition-all duration-700 animate-in fade-in slide-in-from-bottom-10 hover:bg-custom-blue sm:col-span-2 ${className}`}
    >
      {/* upper part and text */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">File Penugasan</h1>
        <p className={`font-medium text-white`}>Pengumpulan melalui Grup</p>
      </div>

      {/*  lower part, download file and tanggal*/}
      <div className={`flex flex-row items-end justify-between`}>
        {/* tanggal */}
        {currentTime <= bukaPenugasan ? 
          <div className={`flex flex-col text-sm`}>
            <p className={`font-bold text-custom-blue-dark`}>Tugas Dapat Diunduh Pada:</p>
            <p className={`font-medium text-white`}>{time} WIB</p>
            <p className={`font-medium text-white`}>{date}</p>
          </div> : 
          <div className={`flex flex-col text-sm`}>
            <p className={`font-bold text-custom-blue-dark`}>Deadline:</p>
            <p className={`font-medium text-white`}>{time} WIB</p>
            <p className={`font-medium text-white`}>{date}</p>
          </div>
        }


        {/*  download file button */}
        {currentTime >= bukaPenugasan ? <Link
          href={tugasObject.linkTugas}
          target={`_blank`}
          rel="noopener noreferrer"
          className="ml-auto mt-auto"
        >
          <Button
            variant="secondary"
            className={`bg-custom-blue-darker bg-custom-blue-darker/80 px-4`}
          >
            Unduh
          </Button>
        </Link> : <Button
            variant="secondary"
            className={`bg-custom-blue-darker max-w-48 sm:max-w-none bg-custom-blue-darker/80 px-4`} disabled
          >
            Unduh
          </Button>
        }
        
      </div>
    </div>
  );
}
