import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import RegisterForm from "@/components/auth/register/RegisterForm";
import Image from "next/image";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 md:overflow-hidden">
        {/* left/top */}
        <div className="relative h-[50vh] overflow-hidden bg-custom-blue-dark px-[min(5vw,32px)] py-8 md:h-screen">
          <BackButton home />

          {/* orange box */}
          <div
            className={`absolute bottom-0 right-0 z-0 h-48 w-48 rounded-l-lg bg-custom-brown-light md:h-[80vh] md:w-[45%]`}
          ></div>

          {/* image with a bunch of wrappers */}
          <div
            className={`absolute bottom-0 right-0 z-10 h-64 w-64 md:h-[95vh] md:w-[90%]`}
          >
            <div className={`relative h-full w-full`}>
              {/* actual image */}
              <Image
                src={`/global/main.png`}
                className={`z-10 object-cover`}
                fill
                alt={`OmahTI Learning Center`}
                priority
              />
            </div>
          </div>
        </div>

        {/* right/bottom/form */}
        <div className="flex flex-col justify-center gap-1 overscroll-contain bg-white px-[min(5vw,32px)] py-8 duration-700 animate-in fade-in md:overflow-auto md:overscroll-y-contain md:pb-24 md:pt-56">
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
          <RegisterForm />

          {/* login if the user has an account */}
          <p className="text-center font-medium">
            Sudah punya akun?{" "}
            <span className="font-semibold text-custom-blue-dark">
              <Button variant="link" className="p-0 text-base">
                <Link href="/auth/login">Masuk</Link>
              </Button>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
