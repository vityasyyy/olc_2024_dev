import Image from "next/image";
import diamondsSrc from "../../public/hero/diamonds.svg";

const ContainerLarge = ({
  children,
  className,
  parentClass,
  diamonds = false,
  ...props
}) => {
  return (
    <div
      className={`relative flex justify-center py-8 ${parentClass}`}
      {...props}
    >
      <div className={`mx-[min(5vw,32px)] w-full ${className}`}>{children}</div>
      {diamonds ? (
        <>
          <div className="absolute left-0 right-0 top-8 h-16 w-2xl">
            <div className="relative flex flex-row inset-0 z-10 h-6 w-full object-cover">
              <Image src={diamondsSrc} className="object-cover" alt="diamonds" />
              <Image src={diamondsSrc} className="object-cover" alt="diamonds" />
            </div>
          </div>
          <div className="absolute bottom-1 left-0 right-0 h-16 w-2xl">
            <div className="relative flex flex-row inset-0 h-6 w-full object-cover bg-repeat-x">
              <Image src={diamondsSrc} className="object-cover" alt="diamonds" />
              <Image src={diamondsSrc} className="object-cover" alt="diamonds" />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContainerLarge;
