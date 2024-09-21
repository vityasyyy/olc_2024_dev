'use client'

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

const RegisterForm = ({ className, ...props }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const isDike = watch("isDike");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setError("");
      const transformedData = {
        ...data,
        isDike: data.isDike === "1",
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        transformedData
      );
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        router.push("/class");
      }
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred during registration.");
    }
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
          });
          if (response.ok) router.push('/class');
        } catch (error) {
          console.log("User is okay to register");
        }
      }
    };

    checkLoginStatus();
  }, [router]);

  return (
    <form
      className={`mx-auto my-2 flex w-full max-w-md flex-col gap-2 rounded-xl border-[0.5px] border-black bg-white p-4 text-sm font-semibold shadow-md ${className}`}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="my-1 text-center font-semibold text-custom-blue-dark">
        Pendaftaran
      </h3>

      <FormField
        label="Nama"
        name="username"
        register={register}
        errors={errors}
        rules={{ required: "Nama harus diisi." }}
      />

      <FormField
        label="Email"
        name="email"
        register={register}
        errors={errors}
        rules={{
          required: "Email harus diisi.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: "Format email invalid.",
          },
        }}
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
        rules={{ required: "Password harus diisi." }}
      />

      <FormField
        label="Refill Password"
        name="confirmPassword"
        type="password"
        register={register}
        errors={errors}
        rules={{
          required: "Password harus diisi ulang.",
          validate: (value) => value === watch("password") || "Password tidak sama.",
        }}
      />

      <div className="mt-2 flex flex-row gap-4 text-sm font-normal text-custom-black md:mt-0 md:text-xs">
        <RadioButton id="dike" value="1" label="Mahasiswa DIKE" register={register} name="isDike" />
        <RadioButton id="umum" value="0" label="Peserta Umum" register={register} name="isDike" />
      </div>

      {isDike === "1" && (
        <FormField
          label="NIM"
          name="NIM"
          register={register}
          errors={errors}
          rules={{
            required: "NIM harus diisi.",
            pattern: {
              value: /^\d{2}\/\d{6}\/[A-Z]{2}\/\d{5}$/i,
              message: "Format NIM invalid.",
            },
          }}
        />
      )}

      {error && (
        <p className="flex flex-row items-center gap-2 text-start text-xs font-medium text-red-500">
          <Info className="h-3 w-3 font-semibold" />
          {error}
        </p>
      )}

      <Button variant="secondary" type="submit" className="mt-4 rounded-lg" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};

const FormField = ({ label, name, type = "text", register, errors, rules }) => (
  <>
    <p className="mt-1 text-start text-custom-blue">{label}</p>
    <input
      className="w-full rounded-lg border-[0.5px] border-black p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custom-blue-dark"
      type={type}
      placeholder={label}
      {...register(name, rules)}
    />
    {errors[name] && (
      <p className="text-start text-xs font-normal text-red-500">
        {errors[name].message}
      </p>
    )}
  </>
);

const RadioButton = ({ id, value, label, register, name }) => (
  <div className="flex flex-row gap-2">
    <input {...register(name)} type="radio" id={id} value={value} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default RegisterForm;