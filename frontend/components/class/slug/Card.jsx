import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Link2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const CardDrawer = ({
  sesi,
  judul,
  deskripsi = "Belum ada deskripsi.",
  kurikulum = "Kurikulum belum tersedia.",
  jam,
  tanggal,
  tempat,
  href = "https://omahti.web.id",
  className,
}) => {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild className="h-full w-full">
          <CardBase
            sesi={sesi}
            judul={judul}
            jam={jam}
            tanggal={tanggal}
            tempat={tempat}
            className={className}
            href={href}
          />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-xl">
            <DrawerHeader>
              <DrawerTitle>{judul}</DrawerTitle>
              <DrawerDescription>
                {deskripsi}
                <br />
                <p> </p>
                <p className="mt-2">Curriculum: {kurikulum}</p>
                <Link href={href} className={`ml-auto`}>
                  <Button className={`gap-0.5 p-0`} variant={`link`}>
                    <Link2 className={`h-4`} />
                    {tempat}
                  </Button>
                </Link>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="secondary" className="w-full">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const CardBase = ({
  sesi,
  judul,
  jam,
  tanggal,
  tempat,
  className,
  href = "https://omahti.web.id",
}) => {
  return (
    <div
      className={`flex h-full min-h-64 w-full flex-col justify-between overflow-hidden rounded-xl border-[2px] border-custom-blue-dark p-4 text-left shadow-sm transition-all hover:bg-custom-blue-light/30 ${className}`}
    >
      <p className="text-base font-semibold">Sesi {sesi}</p>

      <div className="flex flex-col gap-1">
        <p className="text-balance text-3xl font-semibold">{judul}</p>
        <div className="flex justify-between gap-2 text-sm font-medium">
          <div className="flex flex-col gap-1">
            <p>{jam}</p>
            <p>{tanggal}</p>
          </div>
          <Link href={href} className="flex items-end">
            <Button variant={`secondary`} className={`p-2 text-xs`}>
              {tempat}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
