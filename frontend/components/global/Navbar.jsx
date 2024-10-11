import Link from "next/link";
import NavbarButtons from "./NavbarButtons";

export default function Navbar({ className, variant = "blue", ...props }) {
  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex w-screen justify-center ${variant === "white" ? "border-b-[1.5px] border-custom-blue-dark bg-white/75" : "bg-custom-blue-dark/75"} backdrop-blur-[8px] ${className}`}
        {...props}
      >
        <div className="mx-[min(5vw,32px)] flex h-16 w-full items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`flex-shrink-0 font-logo text-3xl ${variant === "white" ? "text-custom-blue-dark" : "text-white"}`}
            >
              olc
            </Link>
          </div>
          {/* buttons */}
          <NavbarButtons variant={variant} />
        </div>
      </nav>

      {/* spacer, acts like a margin */}
      <div
        className={`h-16 ${variant === "white" ? "" : "bg-custom-blue-dark"} `}
      ></div>
    </>
  );
}
