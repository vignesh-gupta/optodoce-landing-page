import React from "react";
import Button from "../button";
import { cn } from "@/utils";
import Image from "next/image";
import HeroGrid from "../hero-grid";
import { karlaFont, plusJakartaSansGFont } from "@/utils/font";

const HeroSection = () => {
  return (
    <section
      className={cn("pt-48 container mx-auto pb-24", karlaFont.className)}
    >
      <div className="relative flex flex-col gap-y-4 items-center justify-center ">
        <h1
          className={cn(
            "lg:text-7xl md:text-6xl text-5xl max-w-4xl text-center",
            plusJakartaSansGFont.className
          )}
        >
          Best AI Content Platform{" "}
          <span className="text-gradient">Image Generate</span>
        </h1>

        <p className="mt-4 mb-8 max-w-xl text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="flex gap-4 bg-[#343435] rounded-full pl-6 pr-3 py-3 md:w-md lg:w-lg">
          <input
            placeholder="An Astronaut riding a horse on mars, hd"
            className="focus-visible:outline-0 flex-1"
          />
          <Button text="Generate Now" gradient />
        </div>
        <p
          className={cn(
            "space-x-2 flex mt-2 items-center text-sm flex-wrap",
            plusJakartaSansGFont.className
          )}
        >
          Popular tags: &nbsp;
          {["Creative", "Sport", "Animation", "Fantasy"].map((val) => {
            return (
              <span
                key={val}
                className="bg-[#343435] text-white px-2 py-1 rounded-full"
              >
                {val}
              </span>
            );
          })}
        </p>

        <Image
          src="hero/float-left.svg"
          alt="Hero Float Left"
          width={180}
          height={180}
          className="absolute left-30 bottom-26 lg:block hidden z-[-1] -translate-x-1/2"
        />
        <Image
          src="hero/float-right.svg"
          alt="Hero Float Right"
          width={180}
          height={180}
          className="absolute right-10 bottom-0 lg:block hidden"
        />
      </div>

      <HeroGrid />
    </section>
  );
};

export default HeroSection;
