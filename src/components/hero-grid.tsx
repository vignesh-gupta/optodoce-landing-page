import Image from "next/image";
import React from "react";
import Button from "./button";
import { cn } from "@/utils";
import { karlaFont } from "@/utils/font";

const HeroGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-16">
      <div className="flex flex-col gap-4">
        <Image
          src="/hero/image.png"
          alt="Hero Image 1"
          height={500}
          width={500}
          className="w-full h-auto object-cover rounded-lg"
        />

        <div
          className={cn("mt-8 max-w-md xl:w-lg text-lg", karlaFont.className)}
        >
          <p>
            We&apos;re passionate about empowering creatives with the tools they
            need to <span className="text-gradient">bring their vision</span>{" "}
            to life that&apos;s why we&apos;ve developed
          </p>

          <div className="flex gap-3 lg:gap-x-6 items-center mt-4 flex-wrap">
            <Button text="Get Started" gradient />
            <div className="flex items-center gap-1">
              <span className="text-2xl font-semibold ">100K+</span> Happy
              Customers
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 min-h-[40rem] md:min-h-0">
        <div className="relative">
          <Image
            src="/hero/image-1.png"
            alt="Cat Image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/hero/image-2.png"
            alt="Cat Image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative col-span-2 md:row-span-2">
          <Image
            src="/hero/image-3.png"
            alt="Cat Image"
            fill
            className="object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
