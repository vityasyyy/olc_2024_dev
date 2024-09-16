"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const Router = useRouter();
  return (
    <Button onClick={() => Router.back()} variant="ghost">
      <ArrowLeft className="mr-2 h-5 w-5" />
      Kembali
    </Button>
  );
};

export default BackButton;
