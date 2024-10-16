
import { Suspense } from "react";
import ClassPage from "@/app/olclass/ClassPage";
import LoadingUI from "@/app/olclass/LoadingUI";
import Navbar from "@/components/global/Navbar";
import ContainerLarge from "@/components/global/ContainerLarge";
import Footer from "@/components/global/Footer";

export default function ClassSlug() {
  return (
    <>
      <Navbar variant={`white`} />
      <ContainerLarge diamonds={false} parentClass="bg-white">
        <Suspense fallback={<LoadingUI />}>
          <ClassPage />
        </Suspense>
      </ContainerLarge>
      <Footer />
    </>
  );
}
