export default function DescriptionCard({ object, idx = 0 }) {
  return (
    <>
      <div
        className={`flex h-full min-h-48 w-full flex-col gap-2 rounded-md border-[2px] border-custom-blue-dark p-4 text-left text-custom-blue-dark shadow-sm`}
      >
        {/*  label */}
        <p className="text-base font-semibold">Deskripsi</p>

        {/*  description */}
        <p>{object[idx].deskripsi}</p>
      </div>
    </>
  );
}
