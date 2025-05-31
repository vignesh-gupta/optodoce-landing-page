import React from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Button from "./button";

const Navbar = () => {
  return (
    <div className="container flex justify-between mx-auto items-center mt-4">
      <MenuIcon />
      <Image
        src="/logo.svg"
        alt="Logo"
        width={150}
        height={100}
        className="object-contain"
      />
      <div className="flex items-center gap-4">
        <Button text="Login" />
        <Button text="Sign Up" gradient />
      </div>
    </div>
  );
};

export default Navbar;
