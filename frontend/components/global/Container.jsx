import Image from "next/image";
import diamondsSrc from "../../public/hero/diamonds.svg";

const Container = ({
  children,
  className,
  parentClass,
  diamonds = false,
  ...props
}) => {
  return (
    <div className={`relative overflow-hidden py-28 ${parentClass}`} {...props}>
      <div className={`mx-auto w-[90vw] max-w-[1114px] ${className}`}>
        {children}
      </div>
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

export default Container;
