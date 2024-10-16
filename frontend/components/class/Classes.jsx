"use client";
import { useEffect, useState } from "react";
import Card from "@/components/class/Card";
import SkeletonKelas from "./SkeletonKelas";
import { OLConCard } from "@/components/class/OLConCard";

const Classes = ({ classes }) => {
  const [enrolledClass, setEnrolledClass] = useState(null);
  const [loading, setLoading] = useState(true); // Start loading as true
  const [error, setError] = useState("");
  const [olcon, setOlcon] = useState(null);
  useEffect(() => {
    const fetchEnrolledClass = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/get-enrolled-class`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch enrolled OLClass");
        }

        const classData = await response.json();
        setOlcon(classData.olcon);
        setEnrolledClass(classData.enrolledTo); // Assume classData is a single olclass object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledClass().catch();
  }, []);

  if (loading) {
    return <SkeletonKelas />;
  }

  if (error) {
    return <p className="mt-8 text-red-500">{error}</p>;
  }
  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "TBA";
  return (
    <>
      {enrolledClass ? (
        <>
          <p className="pt-10 text-xl font-bold text-custom-blue-dark sm:text-2xl">
            Kelas Pilihanmu
          </p>
          <p className="pb-6 font-medium">OLClass dan OLConvention</p>
          <div className="grid auto-rows-fr grid-cols-1 gap-4 duration-700 ease-in animate-in fade-in slide-in-from-right-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card
              key={enrolledClass._id}
              src={enrolledClass.mentor.fotoMentor.coverKelas}
              label={enrolledClass.divisi}
              judul={enrolledClass.title}
              tanggal={
                enrolledClass.waktuStart && enrolledClass.waktuEnd
                  ? `${formatDate(enrolledClass.waktuStart)} - ${formatDate(enrolledClass.waktuEnd)}`
                  : "TBA"
              }
              href={`/olclass/${enrolledClass.slug}`}
              className="col-span-1 sm:col-span-2 md:col-span-1"
            />
            <OLConCard
              object={olcon}
              href={`/olcon/day-1`}
              idx={0}
              className=""
            />
            <OLConCard
              object={olcon}
              href={`/olcon/day-2`}
              idx={1}
              className=""
            />
          </div>
        </>
      ) : (
        <>
          <p className="pt-10 text-xl font-bold text-custom-blue-dark sm:text-2xl">
            Kelas Tersedia
          </p>
          <p className="pb-6 font-medium">
            Kamu hanya dapat memilih satu kelas dan pendaftar akan langsung
            dapat akses OLConvention
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {classes.length > 0 ? (
              classes.map((item) => (
                <div
                  key={item._id}
                  className="duration-500 ease-in animate-in fade-in slide-in-from-right-5"
                >
                  <Card
                    label={item.divisi}
                    judul={item.title}
                    src={item.mentor.fotoMentor.coverKelas === "" ? undefined : item.mentor.fotoMentor.coverKelas}
                    tanggal={
                      item.waktuStart && item.waktuEnd
                        ? `${formatDate(item.waktuStart)} - ${formatDate(item.waktuEnd)}`
                        : "TBA"
                    }
                    href={`/olclass/${item.slug}`}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No classes available.</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Classes;
