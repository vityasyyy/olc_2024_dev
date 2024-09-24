import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SessionCard({
  sesi = "1",
  judul = "Perkenalan ke HTML, CSS, dan Javascript",
  jam = "08:00",
  tanggal = "27 Maret 2024",
  tempat = "Zoom Meeting",
  href = "/",
  object,
  idx = 0,
}) {
  // Create a Date object
  const dateObj = new Date(object[idx].waktu);

  // Get the time in HH:mm format
  const time = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get the date in "2 October, 2024" format
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const date = dateFormatter.format(dateObj);

  return (
    <div
      className={`flex h-full min-h-48 w-full flex-col justify-between rounded-xl border-[2px] border-custom-blue-dark p-4 text-left text-custom-blue-dark shadow-sm`}
    >
      <p className="text-base font-semibold">Sesi {idx + 1}</p>

      <div className="flex flex-col gap-1">
        <p className="max-w-sm text-3xl font-semibold">
          {object[idx].judulSesi}
        </p>
        <div className="flex justify-between text-sm font-medium">
          <div className="flex flex-col gap-1">
            <p>{time}</p>
            <p>{date}</p>
          </div>
          <div className="flex items-end">
            <Link href={href}>
              <Button
                variant="link"
                className="h-fit p-0 text-custom-blue-dark"
              >
                {object[idx].platform}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
