"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginForm = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [isResetting, setIsResetting] = useState(false); // State to track reset password submission

  const onSubmit = async (data) => {
    if (isResetting) return; // Prevent login submission during reset

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.token);
        router.push("/class");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  // Handle reset password
  const handleResetPassword = async () => {
    const email = watch("email"); // Watch the email field
    if (!email) {
      setResetError("Email harus diisi untuk reset password.");
      return;
    }

    setIsResetting(true); // Set state to indicate reset is in progress

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/request-password-reset`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setResetMessage("Cek email Anda untuk mengatur ulang kata sandi.");
        setResetError("");
      } else {
        const errorData = await response.json();
        setResetError(errorData.error);
      }
    } catch (error) {
      setResetError("Gagal mengirim permintaan reset kata sandi.");
    } finally {
      setIsResetting(false); // Reset the state after the operation
    }
  };

  return (
    <>
      <form
        className={`mx-auto my-2 flex w-full max-w-md flex-col gap-2 rounded-xl border-[0.5px] border-black bg-white p-4 text-sm font-semibold shadow-md ${className}`}
        {...props}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="my-1 text-center font-semibold text-custom-blue-dark">
          Masuk
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

        <Button variant="secondary" type="submit" className="mt-4 rounded-lg">
          Login
        </Button>
        {error && (
          <p className="flex flex-row items-center justify-center gap-2 text-center text-xs font-normal text-red-500">
            <Info className="h-4 w-4" />
            {error}
          </p>
        )}
      </form>

      {/* Reset Password Button */}
      <button
        className="mt-4 text-center text-custom-blue-dark underline"
        onClick={handleResetPassword}
        disabled={isResetting} // Disable button during reset
      >
        Lupa kata sandi?
      </button>
      {resetError && (
        <p className="flex flex-row items-center justify-center gap-2 text-center text-xs font-normal text-red-500">
          <Info className="h-4 w-4" />
          {resetError}
        </p>
      )}
      {resetMessage && (
        <p className="text-center text-xs font-normal text-green-500">
          {resetMessage}
        </p>
      )}
    </>
  );
};

export default LoginForm;
