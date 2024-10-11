export default function Title({ isDike }) {
  const title = isDike
    ? "Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM"
    : "Pendaftar Umum";
  const subtitle = isDike
    ? "halaman pendaftaran untuk Mahasiswa/i Departemen Ilmu Komputer dan Elektronika UGM"
    : "halaman pendaftaran untuk Mahasiswa/i NON-DIKE UGM, dan untuk umum";
  const benefits = isDike
    ? [
        "Tiket OLClass day 2-5",
        "Tiket OLCon day 1 dan 6 (limited)",
        "100% refund untuk kehadiran",
      ]
    : [
        "Tiket OLClass day 2-5",
        "Tiket OLCon day 1 dan 6 (limited)",
        "100% refund untuk kehadiran",
      ];

  return (
    <>
      <div className="flex flex-col gap-2 *:text-custom-blue-dark lg:max-h-72 lg:max-w-[52rem]">
        <h1 className="text-2xl font-semibold leading-loose lg:text-4xl">
          {title}
        </h1>
        <p className="my-1 font-medium">{subtitle}</p>
        <p className="font-bold">Benefit</p>
        <ol className="list-decimal pl-4 font-medium">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
