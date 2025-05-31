import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Button from "../button";
import { cn } from "@/utils";
import Image from "next/image";

const headFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    <div className="relative flex flex-col gap-y-4 items-center justify-center pt-48">
      <h1
        className={cn(
          "text-7xl  max-w-4xl text-center font-extralight ",
          headFont.className
        )}
      >
        Best AI Content Platform{" "}
        <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
          Image Generate
        </span>
      </h1>

      <p className="mt-4 mb-8 max-w-xl text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      <div className="flex gap-4 bg-[#343435] rounded-full pl-6 pr-3 py-3 w-xl">
        <input
          placeholder="An Astronaut riding a horse on mars, hd"
          className="focus-visible:outline-0 flex-1"
        />
        <Button text="Generate Now" gradient />
      </div>
      <p className="space-x-2 flex mt-2 items-center text-sm ">
        Popular tags: &nbsp;
        {["Creative", "Sport", "Animation", "Fantasy"].map((val) => {
          return (
            <span
              key={val}
              className="bg-[#343435] text-white px-2 py-1  rounded-full"
            >
              {val}
            </span>
          );
        })}
      </p>


      <Image
        src="hero-float-left.svg"
        alt="Hero Float Left"
        width={180}
        height={180}
        className="absolute left-30 bottom-26"
      />
      <Image
        src="hero-float-right.svg"
        alt="Hero Float Right"
        width={180}
        height={180}
        className="absolute right-30 bottom-0"
      />
    </div>
  );
};

export default HeroSection;
