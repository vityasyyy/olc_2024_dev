"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import { motion } from "framer-motion";

const Register = () => {

  return (
    <div className="fixed inset-0 flex h-screen w-screen flex-col sm:flex-row">
      {/* top side / left side */}
      <div className="h-1/2 w-screen bg-[#D9D9D9] p-4 sm:h-screen sm:w-1/2">
        <BackButton />
      </div>

      {/* form bottom / right side */}
      <motion.div 
      className={`flex flex-col content-center justify-center gap-2 p-4 text-center sm:h-screen sm:w-1/2`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold sm:text-4xl">Daftar OLClass</h1>
        <p>Bergabung untuk bantu kamu meraih mimpimu</p>
        <Form
        />
        <p>
          Sudah punya akun?
          <span>
            <Link className="font-semibold hover:underline" href="/auth/masuk">
              {" "}
              Masuk
            </Link>
          </span>
        </p>
      </motion.div>
    </div>
  );
};

const Form = ({ className, ...props }) => {
  return (
    <form
      className={`mx-auto my-2 w-full flex flex-col gap-2 border-[2px] sm:w-4/5 md:w-3/5 border-black p-4 ${className}`}
      {...props}
    >
      <h3 className="font-semibold">Pendaftaran</h3>
      <p className="mt-1 text-start">Nama</p>
      <input
        className="w-full border-[1px] border-black p-2"
        type="text"
        placeholder="Nama Lengkap"
      />
      <p className="mt-1 text-start">Password</p>
      <input
        className="w-full border-[1px] border-black p-2"
        type="password"
        placeholder="Password"
      />
      <p className="mt-1 text-start">Refill Password</p>
      <input
        className="w-full border-[1px] border-black p-2"
        type="password"
        placeholder="Konfirmasi Password"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Register;
