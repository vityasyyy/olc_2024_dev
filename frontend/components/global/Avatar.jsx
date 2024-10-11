import Image from "next/image";

const Avatar = ({
  src = "/placeholder.svg",
  alt = "Speaker Image",
  nama = "Speaker Name",
  deskripsi = "Speaker Position",
  className,
}) => {
  return (
    <div
      className={`flex h-[70vh] w-full max-w-sm flex-col gap-4 lg:h-full lg:max-w-none`}
    >
      {/* the actual avatar image */}
      <div
        className={`relative flex h-full flex-col items-end gap-2 overflow-hidden rounded-lg text-custom-blue-darker ${className}`}
      >
        <Image
          className="relative h-full w-full rounded-xl object-cover"
          src={src}
          alt={alt}
          fill
        />

        <div className="absolute inset-0 bg-gradient-to-t from-custom-blue-darker to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 text-white">
          <p className="font-medium lg:text-lg">Speaker</p>
          <p className="text-2xl font-semibold lg:text-3xl">{nama}</p>
          <p className="font-medium lg:text-lg">{deskripsi}</p>
        </div>
      </div>

      {/*  stupid fucking block of nothing */}
      <div
        className={`hidden h-1/5 w-full rounded-lg bg-custom-blue-dark lg:block`}
      ></div>
    </div>
  );
};

export default Avatar;
