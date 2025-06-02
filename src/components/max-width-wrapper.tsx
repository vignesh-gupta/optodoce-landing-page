import { cn } from "@/utils";
import { karlaFont } from "@/utils/font";
import React from "react";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <section
      className={cn("container mx-auto px-4", karlaFont.className, className)}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
