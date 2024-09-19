import { Button } from "@/components/ui/button";
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
  jam,
  tanggal,
  tempat,
  className,
}) => {
  return (
    <Drawer>
      <DrawerTrigger className="w-full h-full">
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
            <DrawerDescription>{deskripsi}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="secondary" className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const CardBase = ({ sesi, judul, jam, tanggal, tempat, className }) => {
  return (
    <div
      className={`flex min-h-64 h-full w-full flex-col justify-between rounded-xl border-[2px] border-custom-blue-dark p-4 text-left shadow-sm transition-all hover:bg-custom-blue-light/30 ${className}`}
    >
      <p className="text-base font-semibold">Sesi {sesi}</p>

      <div className="flex flex-col gap-1">
        <p className="text-3xl font-semibold">{judul}</p>
        <div className="flex justify-between text-sm font-medium">
          <div className="flex flex-col gap-1">
            <p>{jam}</p>
            <p>{tanggal}</p>
          </div>
          <div className="flex items-end">
            <p>{tempat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
