"use client";
import { useEffect, useState } from "react";
import Card from "@/components/class/Card";
import SkeletonKelas from "./SkeletonKelas";

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
          throw new Error("Failed to fetch enrolled class");
        }

        const classData = await response.json();
        setOlcon(classData.olcon);
        setEnrolledClass(classData.enrolledTo); // Assume classData is a single class object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledClass();
  }, []);

  if (loading) {
    return <SkeletonKelas />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <p className="pt-10 text-xl font-bold text-custom-blue-dark sm:text-2xl">
        Kelas Pilihanmu
      </p>

      {enrolledClass ? (
        <>
          <p className="pb-6 font-medium">
            Kamu hanya dapat memilih satu kelas dan pendaftar akan langsung
            menakses OLConvention
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <Card
              key={enrolledClass._id}
              label={enrolledClass.title}
              judul={enrolledClass.title}
              tanggal={enrolledClass.waktu ? enrolledClass.waktu : "TBA"}
              href={`/class/${enrolledClass.slug}`}
              className="delay-200 duration-700 ease-in animate-in fade-in slide-in-from-right-5"
            />
            <Card
              key={olcon._id}
              label={olcon.sesi[0].judulSesi}
              judul={olcon.sesi[0].judulSesi}
              tanggal={olcon.sesi[0].waktu ? olcon.sesi[0].waktu : "TBA"}
              href={`/olcon`}
              className="delay-200 duration-700 ease-in animate-in fade-in slide-in-from-right-5"
            />
            <Card
              key={olcon._id + 1}
              label={olcon.sesi[1].judulSesi}
              judul={olcon.sesi[1].judulSesi}
              tanggal={olcon.sesi[1].waktu ? olcon.sesi[1].waktu : "TBA"}
              href={`/olcon`}
              className="delay-200 duration-700 ease-in animate-in fade-in slide-in-from-right-5"
            />
          </div>
        </>
      ) : (
        <>
          <p className="pb-6 font-medium">OLClass dan OLConvention</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {classes.length > 0 ? (
              classes.map((item) => (
                <div
                  key={item._id}
                  className="duration-500 ease-in animate-in fade-in slide-in-from-right-5"
                >
                  <Card
                    label={item.title}
                    judul={item.title}
                    tanggal={item.waktu ? item.waktu : "TBA"}
                    href={`/class/${item.slug}`}
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
