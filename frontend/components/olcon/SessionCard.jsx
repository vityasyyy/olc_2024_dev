import Link from "next/link";

export default function SessionCard({
  sesi = "1",
  judul = "Perkenalan ke HTML, CSS, dan Javascript",
  jam = "08:00",
  tanggal = "27 Maret 2024",
  tempat = "Zoom Meeting",
  href = "/",
}) {
  return (
    <div
      className={`flex h-full min-h-48 w-full flex-col justify-between rounded-xl border-[2px] border-custom-blue-dark p-4 text-left text-custom-blue-dark shadow-sm`}
    >
      <p className="text-base font-semibold">Sesi {sesi}</p>

      <div className="flex flex-col gap-1">
        <p className="max-w-sm text-3xl font-semibold">{judul}</p>
        <div className="flex justify-between text-sm font-medium">
          <div className="flex flex-col gap-1">
            <p>{jam}</p>
            <p>{tanggal}</p>
          </div>
          <div className="flex items-end">
            <Link href={href}>{tempat}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
