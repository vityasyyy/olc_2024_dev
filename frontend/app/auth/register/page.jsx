"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  const Router = useRouter();

  return (
    <div className="fixed inset-0 flex h-screen w-screen flex-col sm:flex-row">
      {/* top side / left side */}
      <div className="h-1/2 w-screen bg-[#D9D9D9] p-4 sm:h-screen sm:w-1/2">
        <Button onClick={() => Router.back()} variant="ghost">
          Kembali
        </Button>
      </div>

      {/* form bottom / right side */}
      <div className="flex flex-col content-center justify-center gap-2 p-4 text-center sm:h-screen sm:w-1/2">
        <h1 className="text-2xl font-bold">Daftar OLClass</h1>
        <p>Bergabung untuk bantu kamu meraih mimpimu</p>
        <Form />
        <p>
          Sudah punya akun? 
          <span>
            <Link className="font-semibold hover:underline" href="/auth/masuk"> Masuk</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <form className="mx-auto my-2 flex max-w-96 flex-col gap-2 border-[2px] border-black p-4">
      <h3 className="font-semibold">Pendaftaran</h3>
      <p className="text-start mt-1">Nama</p>
      <input className="p-2" type="text" placeholder="Nama Lengkap" />
      <p className="text-start mt-1">Password</p>
      <input className="p-2" type="password" placeholder="Password" />
      <p className="text-start mt-1">Refill Password</p>
      <input className="p-2" type="password" placeholder="Konfirmasi Password" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Register;
