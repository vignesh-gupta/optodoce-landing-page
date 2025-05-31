import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Image
        src="Ellipse-1.svg"
        alt="Hero Float Left"
        width={1100}
        height={100}
        className="absolute left-[50%] -top-5 -translate-x-[50%]  z-[-1]"
      />

      <Image
        src="Ellipse-1-1.svg"
        alt="Hero Float Left"
        width={550}
        height={100}
        className="absolute left-[50%] -top-5 -translate-x-[50%]  z-[-1]"
      />
      <Navbar />
      <HeroSection />
    </main>
  );
}
