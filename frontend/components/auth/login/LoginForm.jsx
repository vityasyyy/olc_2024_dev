"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginForm = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        data,
        { headers: { "Content-Type": "application/json" } },
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
      }
      router.push("/class");
    } catch (error) {
      setError(error.response.data.error);
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
      {errors.Email && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.Email.message}
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
      {errors.Password && (
        <p className="text-start text-xs font-normal text-red-500">
          {errors.Password.message}
        </p>
      )}

      <Button variant="secondary" type="submit" className="mt-4 rounded-lg">
        Submit
      </Button>
      {error && (
        <p className="flex flex-row items-center justify-center gap-2 text-center text-xs font-normal text-red-500">
          <Info className="h-4 w-4" />
          {error}
        </p>
      )}
    </form>
  );
};

export default LoginForm;