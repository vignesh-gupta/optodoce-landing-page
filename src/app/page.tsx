import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro";
import MissionSection from "@/components/sections/mission";
import RecentCreationSection from "@/components/sections/recent-creation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative mb-20">
      <Image
        src="Ellipse-1.svg"
        alt="Hero Float Left"
        width={1100}
        height={50}
        className="absolute left-[50%] -top-5 -translate-x-[50%] z-[-1] min-w-[100%] h-[550px] object-contain"
      />

      <Image
        src="Ellipse-1-1.svg"
        alt="Hero Float Left"
        width={550}
        height={100}
        className="absolute left-[50%] -top-5 -translate-x-[50%] z-[-1] min-w-1/2 h-[225px] object-contain"
      />
      <Navbar />
      <HeroSection />
      <IntroSection />
      <RecentCreationSection />
      <MissionSection />
    </main>
  );
}
