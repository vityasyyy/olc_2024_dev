import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <div className="fixed flex h-screen w-screen place-items-center items-center justify-center bg-white" >
        {/* 404 page not found */}
        <div className="mx-8 flex w-full max-w-sm flex-col items-center gap-4">
          <h1 className="text-center font-logo text-9xl text-custom-blue-dark">
            404
          </h1>
          <p className="text-center text-lg font-semibold text-custom-blue-dark">
            Oops! You're Lost.
          </p>
          <p className="text-center text-sm text-custom-blue-dark">
            The page you are looking for was not found.
          </p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
