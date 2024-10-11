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
          <div className="w-2xl absolute left-0 right-0 top-8 h-16 overflow-hidden">
            <div className="relative inset-0 z-10 flex h-6 w-full flex-row object-cover">
              <Image
                src={diamondsSrc}
                className="object-cover"
                alt="diamonds"
              />
              <Image
                src={diamondsSrc}
                className="object-cover"
                alt="diamonds"
              />
            </div>
          </div>
          <div className="w-2xl absolute bottom-1 left-0 right-0 h-16 overflow-hidden">
            <div className="relative inset-0 z-10 flex h-6 w-full flex-row bg-repeat-x object-cover">
              <Image
                src={diamondsSrc}
                className="object-cover"
                alt="diamonds"
              />
              <Image
                src={diamondsSrc}
                className="object-cover"
                alt="diamonds"
              />
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
