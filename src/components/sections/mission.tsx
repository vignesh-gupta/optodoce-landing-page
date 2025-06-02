import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import { nunitoSansFont } from "@/utils/font";
import { cn } from "@/utils";

const MissionSection = () => {
  return (
    <MaxWidthWrapper className={cn("py-16", nunitoSansFont.className)}>
      <div className="grid lg:grid-cols-2 items-center gap-8">
        <div>
          <h3 className="lg:text-3xl text-2xl max-w-4xl font-semibold">
            Our Mission
          </h3>

          <p className="text-[#878787]">
            We believe in serving quality services which can meet customers
            requirements. Our vision is to bring out the best in people,
            technology and processes with top-notch quality. We build customer
            experience. Our mission is to place a consistent innovation to bring
            about an ultimate crest of triumph as our service.
          </p>
        </div>

        <Image
          src="/mission.svg"
          alt="Mission Image"
          className="object-contain w-3/4 mx-auto h-auto"
          height={400}
          width={800}
        />
      </div>
      <span className="font-extrabold text-[13rem] text-[#55b1b1] opacity-15 hidden lg:inline-block">
        MISSION
      </span>
    </MaxWidthWrapper>
  );
};

export default MissionSection;
