"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/global/BackButton";
import { Progress } from "@/components/ui/progress";
import ContainerLarge from "@/components/global/ContainerLarge";
import CardDrawer from "@/components/class/slug/Card";
import { motion } from "framer-motion";
import SkeletonFull from "@/components/global/SkeletonFull";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

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
        <ContainerLarge parentClass="bg-white">
          <BackButton black />
          <SkeletonFull />
        </ContainerLarge>
      </>
    );
  }

  return (
    <>
        <ContainerLarge className="text-custom-blue-dark">
          <BackButton black />
          <h1 className="my-8 text-4xl font-bold">{classDetail.title}</h1>

          <div className="flex flex-col gap-6 lg:flex-row">
            {classDetail.map}
            {/* speaker and image section */}
            <Avatar
              nama={classDetail.mentor?.nama}
              deskripsi={classDetail.mentor?.deskripsi}
              src={classDetail.mentor?.image}
              alt={classDetail.mentor?.nama}
            />

            {/* right side */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-2xl font-semibold text-black">
                Slot Tersedia :
              </p>
              <div className="flex w-full flex-row items-center gap-3">
                <Progress value={progress} className="w-full" />
                <p className="text-xl font-semibold text-black">
                  {classDetail.enrolled}/{classDetail.slot}
                </p>
              </div>

              {/* session cards */}
              <motion.div
                variants={parentVariants}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-3 lg:grid-rows-2"
                initial="hidden"
                animate="visible"
              >
                {/* join card on small screens */}
                <motion.div variants={childVariants} className="sm:hidden">
                  <JoinCard />
                </motion.div>

                {classDetail.sesi.map((session, index) => (
                  <motion.div variants={childVariants}>
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
                  </motion.div>
                ))}

                {/* join card on large screens */}
                <motion.div variants={childVariants} className="hidden sm:flex">
                  <JoinCard />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </ContainerLarge>
    </>
  );
};

const JoinCard = ({
  judul = "Ayo Bergabung Sekarang!",
  desc = "slot kelas terbatas",
  className,
}) => {
  return (
    <div
      className={`flex h-full w-full flex-col justify-end gap-2 md:gap-6 md:p-4 ${className}`}
    >
      {/* judul dan desc */}
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-semibold">{judul}</p>
        <p className="text-base font-medium">{desc}</p>
      </div>
      <Button variant="secondary" asChild>
        <Link href="/auth/register">Daftar Sekarang</Link>
      </Button>
    </div>
  );
};

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
        className={`relative flex w-full flex-col gap-2 text-custom-blue-darker md:flex-row md:gap-6 lg:w-1/3`}
      >
        <Image
          className="relative h-96 w-full rounded-xl sm:w-1/2 md:w-2/5 lg:h-full lg:w-full"
          src={src}
          alt={alt}
          width={500}
          height={600}
        />

        <div className="flex flex-col sm:gap-2 md:mt-auto lg:absolute lg:bottom-4 lg:left-4 lg:text-white">
          <p className="font-medium lg:text-lg">Speaker</p>
          <p className="text-2xl font-semibold lg:text-3xl">{nama}</p>
          <p className="font-medium lg:text-lg">{deskripsi}</p>
        </div>
      </div>
    </>
  );
};

export default ClassDetail;
