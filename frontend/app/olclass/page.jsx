import { Suspense } from "react";
import ClassPage from "@/app/olclass/ClassPage";
import LoadingUI from "@/app/olclass/LoadingUI";

export default function ClassSlug() {
  return (
    <Suspense fallback={<LoadingUI />}>
      <ClassPage />
    </Suspense>
  );
}
