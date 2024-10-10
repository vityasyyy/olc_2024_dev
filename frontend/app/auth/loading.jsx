import BackButton from "@/components/global/BackButton";

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 md:overflow-hidden">
        {/* left/top */}
        <div className="h-[50vh] bg-custom-blue-darker px-[min(5vw,32px)] py-8 md:h-screen">
          <BackButton />
        </div>

        {/* right/bottom/form */}
        <div className="flex flex-col justify-center gap-1 overscroll-contain bg-white px-[min(5vw,32px)] py-8 duration-700 animate-in fade-in md:overflow-auto md:overscroll-y-contain md:pb-24 md:pt-56"></div>
      </div>
    </>
  );
}
