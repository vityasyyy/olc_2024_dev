"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";
import CardDrawer from "@/components/class/slug/Card";

const ClassDetail = () => {
  const params = useParams();
  const slug = params.slug; // Get the slug from the URL
  const [classDetail, setClassDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!slug) return; // Wait for slug to be available

    // Fetch class id by slug
    const fetchClassIdBySlug = async () => {
      try {
        // Fetch class data by slug to retrieve the id
        const slugResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/olclass/slug/${slug}`,
        );
        console.log(slugResponse);
        const classId = slugResponse.data; // Assuming your response contains the ID

        // Now fetch the class details using the id
        const classResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/olclass/${classId}`,
        );
        setClassDetail(classResponse.data);
        setProgress(
          (classResponse.data.enrolled / classResponse.data.slot) * 100,
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching class detail:", error);
      }
    };

    fetchClassIdBySlug();
  }, [slug]);

  if (loading || !classDetail) {
    return (
      <>
        <ContainerLarge>
          <BackButton />
        </ContainerLarge>
      </>
    ) 
  }

  return (
    <>
      <div className="bg-white">
        <ContainerLarge className="text-custom-blue-dark">
          <BackButton />
          <h1 className="my-8 text-4xl font-bold">{classDetail.title}</h1>

          <div className="flex flex-col gap-6 md:flex-row">
            {/* speaker and image section */}
            <div className="relative flex w-full flex-row gap-2 md:w-1/3 md:flex-col">
              <Image
                className="h-24 w-auto object-cover md:h-auto md:w-full"
                src={classDetail.image || "/placeholder.svg"}
                alt={classDetail.mentor?.nama || "Speaker Image"}
                width={500}
                height={600}
              />

              <div className="flex flex-col sm:gap-2">
                <p className="font-medium">Speaker</p>
                <p className="text-xl font-semibold sm:text-2xl">
                  {classDetail.mentor?.nama || "Speaker Name"}
                </p>
                <p className="font-medium text-gray-500">
                  {classDetail.mentor?.deskripsi || "Speaker Position"}
                </p>
              </div>
            </div>

            {/* right side */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-2xl font-semibold text-black">
                Slot Tersedia :
              </p>
              <div className="flex flex-wrap gap-3">
                <Progress value={progress} />
                <p className="text-xl font-semibold text-black">
                  {classDetail.enrolled}/{classDetail.slot}
                </p>
              </div>

              {/* session cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {classDetail.sesi.map((session, index) => (
                  <CardDrawer
                    key={index}
                    sesi={`${index + 1}`}
                    judul={session.judulSesi}
                    tanggal={new Date(session.waktu).toLocaleDateString(
                      "id-ID",
                      { day: "2-digit", month: "long", year: "numeric" },
                    )}
                    jam={new Date(session.waktu).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    tempat={session.platform}
                  />
                ))}
              </div>
            </div>
          </div>
        </ContainerLarge>
      </div>
    </>
  );
};

export default ClassDetail;
