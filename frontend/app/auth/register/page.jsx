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
              Daftar OLClass
            </h1>
            <p className="text-center font-semibold text-black">
              Bergabung untuk bantu kamu meraih mimpimu
            </p>
          </div>

          {/* formn */}
          <Form />

          {/* login if the user doesnt have an account */}
          <p className="text-center font-medium">
            Sudah punya akun?{" "}
            <span className="font-semibold text-custom-blue-dark">
              <Button variant="link" className="p-0 text-base">
                <Link href="/auth/login">Masuk</Link>
              </Button>
            </span>
          </p>
        </motion.div>
      </div>
    </>
  );
};

const Form = ({ className, ...props }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isDike = watch("isDike");
  const [error, setError] = useState('');
  const onSubmit = async (data) => {
    try {
      const transformedData = {
        ...data,
        isDike: data.isDike === "1" ? true : false, // Transform the isDike value
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        transformedData
      );
      if(response.status === 201) {
        localStorage.setItem('token', response.data.token);
      }
      // Handle successful registration, e.g., redirect to login or show a success message
    } catch (error) {
        setError(error.response.data.error);
      // Handle error, e.g., show an error notification to the user
    }
  };

  return (
    <form
      className={`mx-auto shadow-md my-2 flex w-full max-w-md flex-col gap-2 rounded-xl border-[0.5px] border-black bg-white p-4 text-sm font-semibold ${className}`}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="my-1 text-center font-semibold text-custom-blue-dark">
        Pendaftaran
      </h3>

      {/* Nama */}
      <p className="text-custom-blue mt-1 text-start">Nama</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 focus:outline-none focus:ring-2 focus:ring-custom-blue-dark focus:border-transparent"
        type="text"
        placeholder="Nama"
        {...register("username", { required: "Nama harus diisi." })}
      />
      {errors.nama && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.username.message}
        </p>
      )}

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
      {errors.email && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.email.message}
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
      {errors.password && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.password.message}
        </p>
      )}

      {/* Confirm Password */}
      <p className="text-custom-blue mt-1 text-start">Refill Password</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue-dark focus:border-transparent"
        type="password"
        placeholder="Refill Password"
        {...register("confirmPassword", {
          required: "Password harus diisi ulang.",
          validate: (value) =>
            value === watch("password") || "Password tidak sama.",
        })}
      />
      {errors.confirmPassword && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.confirmPassword.message}
        </p>
      )}

      {/* radio buttons for DIKE and non-DIKE */}

      <div className="text-custom-black text-sm mt-2 flex flex-row gap-4 font-normal md:text-xs md:mt-0">
        <div className="flex flex-row gap-2">
          <input {...register("isDike")} type="radio" id="dike" value="1" />
          <label htmlFor="dike">Mahasiswa DIKE</label>
        </div>
        <div className="flex flex-row gap-2">
          <input {...register("isDike")} type="radio" id="umum" value="0" />
          <label htmlFor="umum">Peserta Umum</label>
        </div>
      </div>

      {/* NIM */}
      {isDike === "1" && (
        <>
          <p className="text-custom-blue mt-1 text-start">NIM</p>
          <input
            className="w-full rounded-lg border-[0.5px] border-black p-2 text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue-dark focus:border-transparent"
            type="text"
            placeholder="NIM"
            {...register("NIM", {
              pattern: {
                required: "NIM harus diisi.",
                value: /^\d{2}\/\d{6}\/[A-Z]{2}\/\d{5}$/i,
                message: "Format NIM invalid.",
              },
            })}
          />
          {errors.NIM && (
            <p className="text-start text-xs font-normal text-red-500">
              {errors.NIM.message}
            </p>
          )}
        </>
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
