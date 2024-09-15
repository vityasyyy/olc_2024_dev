import Image from "next/image";

const Tag = ({ children, className, image, ...props }) => {
  return (
    <div className={`flex flex-row content-center gap-2 ${className}`}>
      <Image className="h-9 w-9" src="placeholder.svg" width={32} height={32} />
      <p className="mt-1 text-xl font-semibold">{children}</p>
    </div>
  );
};

export default Tag;
