"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useState} from "react";
import { Info } from "lucide-react";
import {useRouter} from "next/navigation";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 md:overflow-hidden">
        {/* left/top */}
        <div className="h-[50vh] bg-custom-blue-darker px-[min(5vw,32px)] py-8 md:h-screen">
          <BackButton />
        </div>

        {/* right/bottom/form */}
        <motion.div className="flex flex-col justify-center gap-1 overscroll-contain bg-white px-[min(5vw,32px)] py-8 md:overflow-auto md:overscroll-y-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* title and subtitle */}
          <div className="flex flex-col gap-1 md:mt-8">
            <h1 className="text-center text-2xl font-semibold text-custom-blue-dark lg:text-4xl">
              Masuk OLClass
            </h1>
            <p className="text-center font-semibold text-black">
              Selamat datang kembali!
            </p>
          </div>

          {/* formn */}
          <Form />
        </motion.div>
      </div>
    </>
  );
};

const Form = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState('');
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data, { headers: {'Content-Type': 'application/json'} });
      if(response.status === 200){
        localStorage.setItem('token', response.data.token);
      }
      router.push('/class');
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  return (
    <form
      className={`mx-auto shadow-md my-2 flex w-full max-w-md flex-col gap-2 rounded-xl border-[0.5px] border-black bg-white p-4 text-sm font-semibold ${className}`}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="my-1 text-center font-semibold text-custom-blue-dark">
        Pendaftaran
      </h3>

      {/* Email */}
      <p className="text-custom-blue mt-1 text-start">Email</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 focus:outline-none focus:ring-2 focus:ring-custom-blue-dark focus:border-transparent"
        type="text"
        placeholder="Email"
        {...register("email", {
          required: "Email harus diisi.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: "Format email invalid.",
          },
        })}
      />
      {errors.Email && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.Email.message}
        </p>
      )}

      {/* Password */}
      <p className="text-custom-blue mt-1 text-start">Password</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 focus:outline-none focus:ring-2 focus:ring-custom-blue-dark focus:border-transparent"
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password harus diisi." })}
      />
      {errors.Password && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.Password.message}
        </p>
      )}

      <Button variant="secondary" type="submit" className="mt-4 rounded-lg">
        Submit
      </Button>
      {error && <p className="text-red-500 text-xs font-normal text-center flex flex-row items-center justify-center gap-2">
        <Info className="h-4 w-4"/>{error}</p>}
    </form>
  );
};

export default Register;
