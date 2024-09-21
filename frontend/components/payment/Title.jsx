export default function Title({ isDike }) {
  if (isDike)
    return (
      <>
        <div className="flex flex-col gap-2 lg:max-h-72 lg:max-w-[52rem]">
          <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
            Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM
          </h1>
          <p className="my-1 text-lg font-medium">
            halaman pendaftaran untuk Mahasiswa/i Departemen Ilmu Komputer dan
            Elektronika UGM
          </p>
          <p className="text-lg font-bold">Benefit</p>
          <ol className="mx-2 list-inside list-decimal font-medium">
            <li>Tiket OLClass day 2-5</li>
            <li>Tiket OLCon day 1 dan 6 (limited)</li>
            <li>100% refund untuk kehadiran</li>
          </ol>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="flex flex-col gap-2 lg:mt-20 lg:max-h-72 lg:max-w-[52rem]">
          <h1 className="text-2xl leading-loose font-semibold md:text-4xl lg:text-5xl">
            Pendaftar Umum
          </h1>
          <p className="my-1 text-lg font-medium">
            halaman pendaftaran untuk Mahasiswa/i non DIKE UGM, dan untuk umum
          </p>
          <p className="text-lg font-bold">Benefit</p>
          <ol className="mx-2 list-decimal font-medium">
            <li>Tiket OLClass day 2-5</li>
            <li>Tiket OLCon day 1 dan 6 (limited)</li>
            <li>75% refund untuk kehadiran</li>
          </ol>
        </div>
      </>
    );
}
