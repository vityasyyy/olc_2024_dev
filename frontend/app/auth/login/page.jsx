"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  return (
    <div className="fixed inset-0 flex h-screen w-screen flex-col sm:flex-row">
      {/* top side / left side */}
      <div className="h-1/2 w-screen bg-custom-blue-dark p-4 sm:h-screen sm:w-1/2">
        <BackButton />
      </div>

      {/* form bottom / right side */}
      <motion.div
        className={`flex flex-col content-center justify-center gap-4 p-4 text-center sm:h-screen sm:w-1/2`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* title and subtitle */}
        <div className="font-semibold">
          <h1 className="text-2xl text-custom-blue-dark sm:text-4xl">
            Daftar OLClass
          </h1>
          <p>Bergabung untuk bantu kamu meraih mimpimu</p>
        </div>
        <Form />
        <p className="font-medium">
          Sudah punya akun?
          <span>
            <Link
              className="font-semibold text-custom-blue-dark hover:underline"
              href="/auth/login"
            >
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form
      className={`mx-auto my-2 flex w-full flex-col gap-2 rounded-xl border-[0.5px] border-black p-4 text-sm font-semibold sm:w-4/5 md:w-3/5 ${className}`}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="my-1 font-semibold text-custom-blue-dark">Pendaftaran</h3>
      <p className="text-custom-blue mt-1 text-start">Email</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2"
        type="text"
        placeholder="fahmi@mail.ugm.ac.id"
        {...register("Email", {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        })}
      />
      <p className="text-custom-blue mt-1 text-start">Password</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2"
        type="text"
        placeholder="Fill"
        {...register("Password", {})}
      />

      <Button variant="secondary" type="submit" className="mt-4 rounded-lg">
        Submit
      </Button>
    </form>
  );
};

export default Login;
