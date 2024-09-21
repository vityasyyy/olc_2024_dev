'use client'
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

const RegisterForm = ({ className, ...props }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isDike = watch("isDike");
  const [error, setError] = useState("");
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      // ambil data isDike dari form, convert ke boolean value
      const transformedData = {
        ...data,
        isDike: data.isDike === "1" ? true : false,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        transformedData,
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        router.push("/class");
      }
      // Handle successful registration, e.g., redirect to login or show a success message
    } catch (error) {
      setError(error.response.data.error);
      // Handle error, e.g., show an error notification to the user
    }
  };

  return (
    <form
      className={`mx-auto my-2 flex w-full max-w-md flex-col gap-2 rounded-xl border-[0.5px] border-black bg-white p-4 text-sm font-semibold shadow-md ${className}`}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="my-1 text-center font-semibold text-custom-blue-dark">
        Pendaftaran
      </h3>

      {/* Nama */}
      <p className="mt-1 text-start text-custom-blue">Nama</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custom-blue-dark"
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
      <p className="mt-1 text-start text-custom-blue">Email</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custom-blue-dark"
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
      <p className="mt-1 text-start text-custom-blue">Password</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custom-blue-dark"
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
      <p className="mt-1 text-start text-custom-blue">Refill Password</p>
      <input
        className="w-full rounded-lg border-[0.5px] border-black p-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custom-blue-dark"
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

      <div className="mt-2 flex flex-row gap-4 text-sm font-normal text-custom-black md:mt-0 md:text-xs">
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
          <p className="mt-1 text-start text-custom-blue">NIM</p>
          <input
            className="w-full rounded-lg border-[0.5px] border-black p-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custom-blue-dark"
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

      {error && (
        <p className="flex flex-row items-center gap-2 text-start text-xs font-medium text-red-500">
          <Info className="h-3 w-3 font-semibold" />
          {error}
        </p>
      )}

      <Button variant="secondary" type="submit" className="mt-4 rounded-lg">
        Submit
      </Button>
    </form>
  );
};

export default RegisterForm;