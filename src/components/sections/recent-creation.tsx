import { cn } from "@/utils";
import { plusJakartaSansGFont } from "@/utils/font";
import Image from "next/image";
import React from "react";
import Button from "../button";
import MaxWidthWrapper from "../max-width-wrapper";

const gallery = [
  {
    src: "/gallery/tree.png",
    className: "lg:row-span-2",
  },
  {
    src: "/gallery/astro-kid.png",
  },
  {
    src: "/gallery/alien.png",
  },
  {
    src: "/gallery/future-vr.png",
    className: "lg:row-span-2",
  },
  {
    src: "/gallery/bird.png",
    className: "lg:col-span-2",
  },
];

const RecentCreationSection = () => {
  return (
    <MaxWidthWrapper className="py-16 flex flex-col items-center gap-8">
      <span className="bg-[#6A41FB33] py-4 px-6 rounded-full text-lg">
        Recently Created
      </span>

      <h3
        className={cn(
          "lg:text-5xl md:text-3xl text-2xl max-w-4xl font-semibold text-center",
          plusJakartaSansGFont.className
        )}
      >
        Create anything with <span className="text-gradient">Optpdoce</span> AI
      </h3>

      <p className="text-center max-w-2xl md:text-2xl text-xl">
        {["All", "|", "Cartoon", "|", "Realistic", "|", "3D"].map(
          (val, idx) => (
            <span
              key={`val-${val}-${idx}`}
              className={cn(
                val === "|" ? "mx-2" : "",
                val === "All" && "underline underline-offset-2"
              )}
            >
              {val}
            </span>
          )
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gallery.map((item, index) => (
          <Image
            className={cn(
              "w-full sm:w-2/3 h-auto md:size-full object-cover rounded-lg lg:aspect-auto aspect-square mx-auto",
              item.className
            )}
            key={`gallery-item-${index}`}
            src={item.src}
            alt={`Gallery Item ${index + 1}`}
            height={500}
            width={500}
          />
        ))}
      </div>

      <Button text="Go to our AI gallery" gradient className="mt-8" />
    </MaxWidthWrapper>
  );
};

export default RecentCreationSection;
