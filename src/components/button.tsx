import { cn } from "@/utils";
import React from "react";
import { Karla } from "next/font/google";

export const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

type ButtonProps = {
  text: string;
  className?: string;
  gradient?: boolean;
};

const Button = ({ text, className, gradient }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-4 py-2 bg-white text-black hover:bg-opacity-90 transition-colors duration-300",
        gradient && "bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-white",
        karla.className,
        className
      )}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
