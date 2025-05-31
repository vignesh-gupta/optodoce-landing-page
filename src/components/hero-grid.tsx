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
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />

        <div className={cn("mt-8 w-md xl:w-lg text-lg", karlaFont.className)}>
          <p>
            We&apos;re passionate about empowering creatives with the tools they
            need to <span className="text-gradient">bring their vision</span>{" "}
            to life that&apos;s why we&apos;ve developed
          </p>

          <div className="flex gap-x-6 items-center mt-4">
            <Button text="Get Started" gradient />
            <div className="flex items-center gap-1">
              <span className="text-2xl font-semibold ">100K+</span> Happy
              Customers
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Image
          src="/hero/image-1.png"
          alt="Cat Image"
          height={500}
          width={500}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
        <Image
          src="/hero/image-2.png"
          alt="Cat Image"
          height={500}
          width={500}
          className="w-full h-auto object-cover rounded-lg shadow-lg "
        />
        <Image 
          src="/hero/image-3.png"
          alt="Cat Image"
          height={500}
          width={500}
          className="w-full h-auto object-cover rounded-lg shadow-lg md:col-span-2"
        />
      </div>
    </div>
  );
};

export default HeroGrid;
