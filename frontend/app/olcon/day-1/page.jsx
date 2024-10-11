import OLConPage from "@/components/olcon/Page";

// ACTUAL DAY
const DAY = 1;

export default function Page() {
  // minus 1 because of index starts at 0
  return <OLConPage DAY={DAY - 1} />;
}
