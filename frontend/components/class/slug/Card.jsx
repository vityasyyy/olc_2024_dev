"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useUser from "@/hooks/useUser";
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
  prerequisites = "Familiarity with IDE",
  jam,
  tanggal,
  tempat,
  href = "https://omahti.web.id",
  className,
}) => {
  const [loading, loggedIn] = useUser();

  return (
    <>
      <Drawer>
        <DrawerTrigger className="h-full w-full">
          <CardBase
            sesi={sesi}
            judul={judul}
            jam={jam}
            tanggal={tanggal}
            tempat={tempat}
            className={className}
          />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-xl">
            <DrawerHeader>
              <DrawerTitle>{judul}</DrawerTitle>
              <DrawerDescription asChild>
                <>
                  <div className={`mt-4 text-balance`}>{deskripsi}</div>
                  <div className="mt-1">
                    <span className={`font-semibold`}>Curriculum:</span>{" "}
                    {kurikulum}
                  </div>
                  <div className={`mt-1`}>
                    <span className={`font-semibold`}>Prerequisites:</span>{" "}
                    {prerequisites}
                  </div>
                  <Link
                    href={href}
                    className={` ${loggedIn || "pointer-events-none"}`}
                    aria-disabled={!loggedIn}
                    target={`_blank`}
                    tabIndex={!loggedIn ? -1 : undefined}
                  >
                    {loading || (
                      <Button className={`gap-0.5 p-0`} variant={`link`}>
                        <Link2 className={`h-4`} />
                        {tempat}
                      </Button>
                    )}
                  </Link>
                </>
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

const CardBase = ({ sesi, judul, jam, tanggal, tempat, className }) => {
  return (
    <div
      className={`flex h-full min-h-64 w-full flex-col justify-between overflow-hidden rounded-xl border-[2px] border-custom-blue-dark p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:bg-custom-blue-light/30 hover:shadow-lg ${className}`}
    >
      <p className="text-base font-semibold">Sesi {sesi}</p>

      <div className="flex flex-col gap-1">
        <p className="text-balance text-3xl font-semibold">{judul}</p>
        <div className="flex justify-between gap-2 text-sm font-medium">
          <div className="flex flex-col gap-1">
            <p>{jam}</p>
            <p>{tanggal}</p>
          </div>
          <div
            className={`mt-auto inline-flex items-center justify-center text-nowrap rounded-md bg-custom-blue-dark p-2 text-center text-xs text-white hover:bg-custom-blue-dark`}
          >
            {tempat}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
