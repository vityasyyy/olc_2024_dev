import Image from "next/image";

const Container = ({
  children,
  className,
  parentClass,
  diamonds = false,
  ...props
}) => {
  return (
    <div className={`relative py-28 ${parentClass}`} {...props}>
      <div className={`mx-auto w-[90vw] max-w-[1114px] ${className}`}>
        {children}
      </div>
      {diamonds ? (
        <>
          <div className="absolute left-0 right-0 top-8 h-16 w-full">
            <div className="relative inset-0 h-6 w-full">
              <Image src="hero/diamonds.svg" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className="absolute bottom-1 left-0 right-0 h-16 w-full">
            <div className="relative inset-0 h-6 w-full">
              <Image src="hero/diamonds.svg" objectFit="cover" layout="fill" />
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
