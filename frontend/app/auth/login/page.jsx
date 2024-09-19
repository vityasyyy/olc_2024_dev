import BackButton from "@/components/global/BackButton";
import LoginForm from "@/components/auth/login/LoginForm";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 md:overflow-hidden">
        {/* left/top */}
        <div className="h-[50vh] bg-custom-blue-darker px-[min(5vw,32px)] py-8 md:h-screen">
          <BackButton />
        </div>

        {/* right/bottom/form */}
        <div className="flex flex-col justify-center gap-1 overscroll-contain bg-white px-[min(5vw,32px)] py-8 duration-700 animate-in fade-in md:overflow-auto md:overscroll-y-contain">
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
          <LoginForm />
        </div>
      </div>
    </>
  );
};


export default Register;
