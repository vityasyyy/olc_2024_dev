"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const Router = useRouter();
  return (
    <Button onClick={() => Router.back()} variant="link" className="px-0">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Kembali
    </Button>
  );
};

export default BackButton;
