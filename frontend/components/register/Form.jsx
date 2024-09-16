'use client'
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Form = ({ className, ...props }) => {
  return (
    <form
      className={`mx-auto my-2 flex flex-col gap-2 border-[2px] border-black p-4 ${className}`}
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

export default Form;