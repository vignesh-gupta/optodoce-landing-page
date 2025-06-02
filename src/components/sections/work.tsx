import React from "react";
import Button from "../button";
import Timeline from "../timeline";
import MaxWidthWrapper from "../max-width-wrapper";
import TimelineMD from "../timeline-md";

const WorkSection = () => {
  return (
    <MaxWidthWrapper className="pt-24 pb-12 space-y-8">
      <div className="relative flex flex-col items-center">
        <h3 className="text-4xl">What do we do to remembered for?</h3>
        <p className="absolute top-1/2 left-1/2 -translate-1/2 font-extrabold text-7xl text-[#55b1b1] opacity-20 hidden xl:inline-block">
          WHAT WE DO
        </p>
      </div>
      <p className="text-[#878787] text-lg max-w-4xl mx-auto text-center">
        To connect smart actions and execute it with laser-like focus is our
        success mantra. Exploring client’s business for online exposure is an
        ultimately worthy goal for us. We want to be a voice of client’s
        success.
      </p>
      <div className="flex justify-center">
        <Button
          text="GET IN TOUCH"
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white"
        />
      </div>

      <Timeline />
      <TimelineMD />

      <div className="flex justify-end">
        <span className="font-extrabold text-9xl text-[#55b1b1] opacity-15 hidden lg:inline-block">
          VISION
        </span>
      </div>
    </MaxWidthWrapper>
  );
};

export default WorkSection;
