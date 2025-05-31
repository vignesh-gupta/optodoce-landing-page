import { cn } from "@/utils";
import { karlaFont } from "@/utils/font";
import Image from "next/image";
import React from "react";
import Button from "../button";
import { SparkleIcon } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="bg-white pt-6 pb-20 text-black">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 items-end gap-8">
        <Image
          src="/intro/main.png"
          alt="Intro main avatar"
          className="object-contain my-auto hidden lg:block"
          height={1000}
          width={800}
        />

        <div className="flex flex-col gap-6 items-start">
          <span
            className={cn(
              "bg-[#6A41FB33] py-4 px-6 rounded-full text-black text-lg",
              karlaFont.className
            )}
          >
            Introduce optpdoce AI
          </span>

          <h2 className="lg:text-6xl md:text-4xl text-3xl max-w-4xl font-semibold">
            Unlocking the Power of <span className="text-gradient">AI for a Smarter</span> Future
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

              <p className={cn("flex-1 text-lg", karlaFont.className)}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
