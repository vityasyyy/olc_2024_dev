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

const CardDrawer = ({ sesi, judul, jam, tanggal, tempat, className }) => {
  return (
    <Drawer>
      <DrawerTrigger>
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
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button className="w-full">Close</Button>
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
      className={`flex min-h-64 w-full flex-col justify-between rounded-xl border-[2px] border-custom-blue-dark p-4 text-left shadow-sm ${className}`}
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
