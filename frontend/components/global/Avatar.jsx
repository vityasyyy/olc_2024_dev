import Image from "next/image";

const Avatar = ({
  src = "/placeholder.svg",
  alt = "Speaker Image",
  nama = "Speaker Name",
  deskripsi = "Speaker Position",
  className,
}) => {
  return (
    <>
      <div
        className={`relative flex h-[60vh] w-full max-w-md flex-col items-end gap-2 overflow-hidden rounded-lg text-custom-blue-darker lg:h-full ${className}`}
      >
        <Image
          className="relative h-full w-full rounded-xl"
          src={src}
          alt={alt}
          width={500}
          height={600}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-custom-blue-darker to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 text-white">
          <p className="font-medium lg:text-lg">Speaker</p>
          <p className="text-2xl font-semibold lg:text-3xl">{nama}</p>
          <p className="font-medium lg:text-lg">{deskripsi}</p>
        </div>
      </div>
    </>
  );
};

export default Avatar;
