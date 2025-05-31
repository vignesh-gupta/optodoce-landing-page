import { cn } from "@/utils";
import { karlaFont } from "@/utils/font";
import React from "react";


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
        gradient && "gradient-bg",
        karlaFont.className,
        className
      )}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
