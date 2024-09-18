"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "@/components/global/Navbar";
import Card from "@/components/class/Card";
import Tag from "@/components/global/Tag";
import ContainerLarge from "@/components/global/ContainerLarge";
import CardLoading from "@/components/class/CardLoading";
import Footer from "@/components/global/Footer";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

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

const Class = async () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllClass = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/olclass`,
    );
    setClasses(response.data);
    setLoading(false);
  };
  useState(() => {
    fetchAllClass();
  });

  return (
    <>
      <Navbar loggedIn />
      <ContainerLarge parentClass="bg-white">
        <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
          Halo,
          <br />
          {loading ? (
            <>
              <Skeleton className="mt-2 h-8 w-96" />
            </>
          ) : (
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Gisellma Shampurno
            </motion.p>
          )}
        </h1>

        <Tag blue className="text-custom-blue-dark">
          OLClass
        </Tag>

        <p className="pt-10 text-xl font-bold text-custom-blue-dark sm:text-2xl">
          Kelas Tersedia
        </p>
        <p className="pb-6 font-medium">
          Kamu hanya dapat memilih satu kelas dan pendaftar akan langsung
          mendapat akses OLConvention
        </p>

        <motion.div
          variants={parentVariants}
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        >
          {loading ? (
            <>
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </>
          ) : (
            classes.map((item) => (
              <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
              >
                <Card
                  label={item.title}
                  judul={item.title} //Use appropriate fields from the data
                  tanggal={item.waktu ? item.waktu : "TBA"} // Example of how you can handle missing fields
                  href={`/class/${item.slug}`}
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </ContainerLarge>
      <Footer />
    </>
  );
};

export default Class;
