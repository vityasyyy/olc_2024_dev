import Navbar from "../components/global/Navbar";
import Hero from "../components/home/Hero";
import AboutOLC from "../components/home/AboutOLC";
import Classes from "@/components/home/Classes";
import OLConvention from "@/components/home/OLConvention";
import Timeline from "@/components/home/Timeline";
import Harga from "@/components/home/Harga";
import Benefits from "@/components/home/Benefits";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutOLC />
      <Classes />
      <OLConvention />
      <Timeline />
      <Harga />
      <Benefits />
      <Footer />
    </>
  );
}
