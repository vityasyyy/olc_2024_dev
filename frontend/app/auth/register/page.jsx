import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/components/global/BackButton";
import RegisterForm from "@/components/auth/register/RegisterForm";
  
const Register = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 md:overflow-hidden">
        {/* left/top */}
        <div className="h-[50vh] bg-custom-blue-darker px-[min(5vw,32px)] py-8 md:h-screen">
          <BackButton />
        </div>

        {/* right/bottom/form */}
        <div className="flex flex-col animate-in fade-in duration-700 justify-center gap-1 py-8 overscroll-contain bg-white px-[min(5vw,32px)] md:pt-56 md:pb-24 md:overflow-auto md:overscroll-y-contain">
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
