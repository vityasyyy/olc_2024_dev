import ContainerLarge from "./ContainerLarge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="bg-white">
      <ContainerLarge className="flex items-center justify-center rounded-xl bg-custom-blue-dark p-12 text-white sm:py-16 md:justify-start">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* logo and title */}
          <div className="flex flex-col items-center gap-4 md:justify-center">
            <h1 className="font-logo text-7xl sm:text-8xl">OLC</h1>
            <p className="text-center text-sm">OmahTI Learning Center 2024</p>
            <div className="sm: mt-8 w-full border-t-[1px] border-white md:hidden"></div>
          </div>

          {/* list items, social media dll */}
          <ul className="flex flex-col gap-4 border-white text-center text-sm md:ml-8 md:gap-8 md:border-l-[1px] md:pl-8 md:text-start">
            <li>
              <Button variant="link" className="text-white" asChild>
                <Link href="https://instagram.com/olc_ugm">Instagram</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-white" asChild>
                <Link href="https://instagram.com/omahti_ugm">
                  Instagram OmahTI
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-white" asChild>
                <Link href="">Tiktok OmahTI</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-white" asChild>
                <Link href="">Contact Center</Link>
              </Button>
            </li>
          </ul>
        </div>
      </ContainerLarge>
    </div>
  );
};

export default Footer;
