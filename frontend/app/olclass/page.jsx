import { Suspense } from "react";
import ClassSlugPage from "@/app/olclass/ClassSlugPage";
import LoadingUI from "@/app/olclass/LoadingUI";

export default function ClassSlug() {
  return (
    <Suspense fallback={<LoadingUI />}>
      <ClassSlugPage />
    </Suspense>
  );
}
