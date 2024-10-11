import OLConPage from "@/components/olcon/Page";
import LoadingUI from "@/app/olcon/LoadingUI";
import { Suspense } from "react";

// ACTUAL DAY
const DAY = 2;

export default function Page() {
  // minus 1 because index starts at 0
  return (
    <Suspense fallback={<LoadingUI />}>
      <OLConPage DAY={DAY - 1} />;
    </Suspense>
  );
}
