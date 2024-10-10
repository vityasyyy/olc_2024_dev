"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = ({
  black = false,
  blue = false,
  home = false,
  className,
}) => {
  const Router = useRouter();
  const handleClick = () => {
    if (home) {
      Router.push("/");
    } else {
      Router.back();
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="link"
      className={`px-0 ${black ? "text-black" : "text-white"} ${blue && "text-custom-blue-dark"} ${className}`}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Kembali
    </Button>
  );
};

export default BackButton;
