import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import AboutOLC from "../components/home/AboutOLC";
import Classes from "@/components/home/Classes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutOLC />
      <Classes />
    </>
  );
}
