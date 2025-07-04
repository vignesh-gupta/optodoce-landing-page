import Image from "next/image";
import React from "react";
import Button from "../button";
import { SparkleIcon } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";

const IntroSection = () => {
  return (
    <MaxWidthWrapper className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Image
        src="/intro/main.png"
        alt="Intro main avatar"
        className="object-contain my-auto hidden lg:block"
        height={1000}
        width={800}
      />

      <div className="flex flex-col gap-6 items-start lg:mt-20">
        <span className="bg-[#6A41FB33] py-4 px-6 rounded-full text-black text-lg">
          Introduce optpdoce AI
        </span>

        <h2 className="lg:text-6xl md:text-4xl text-3xl max-w-4xl font-semibold">
          Unlocking the Power of{" "}
          <span className="text-gradient">AI for a Smarter</span> Future
        </h2>

        <div className="flex gap-4 flex-wrap">
          {[
            "/intro/avatar-1.png",
            "/intro/avatar-2.png",
            "/intro/avatar-3.png",
          ].map((src, index) => (
            <Image
              key={`intro-section-${src}`}
              src={src}
              alt={`Avatar ${index + 1}`}
              className="size-40 rounded-md object-cover"
              height={100}
              width={100}
            />
          ))}
        </div>

        <div className="flex gap-6 flex-col lg:flex-row lg:items-center">
          <Button text="Try Now" gradient className="text-xl min-w-fit" />

          <div className="flex items-center gap-2">
            <SparkleIcon fill="#6A41FB" className="size-6 stroke-[#6A41FB] " />

            <p className="flex-1 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default IntroSection;
