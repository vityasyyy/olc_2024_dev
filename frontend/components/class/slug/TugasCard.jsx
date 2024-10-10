import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TugasCard({
  jam = "08:00",
  tanggal = "27 Maret 2024",
  href = "https://docs.google.com",
  className
}) {
  return (
    // penugasan card
    <div
      className={`flex h-full min-h-64 w-full col-span-1 sm:col-span-2 flex-col justify-between rounded-xl border-[2px] border-custom-blue-dark bg-custom-blue p-4 text-left shadow-sm transition-all duration-700 animate-in fade-in slide-in-from-bottom-10 hover:bg-custom-blue ${className}`}
    >
      {/* upper part and text */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">File Penugasan</h1>
        <p className={`font-medium text-white`}>Pengumpulan melalui Grup</p>
      </div>

      {/*  lower part, download file and tanggal*/}
      <div className={`flex flex-row items-end justify-between`}>
        {/* tanggal */}
        <div className={`flex flex-col text-sm`}>
          <p className={`font-bold text-custom-blue-dark`}>Deadline</p>
          <p className={`font-medium text-white`}>{jam} WIB</p>
          <p className={`font-medium text-white`}>{tanggal}</p>
        </div>

        {/*  download file button */}
        <Link href={href} className="ml-auto mt-auto">
          <Button
            variant="secondary"
            className={`bg-custom-blue-darker bg-custom-blue-darker/80 px-4`}
          >
            Download File
          </Button>
        </Link>
      </div>
    </div>
  );
}
