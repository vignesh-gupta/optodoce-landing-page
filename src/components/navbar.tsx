import React from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Button from "./button";

const Navbar = () => {
  return (
    <div className="container flex lg:justify-between mx-auto items-center mt-4 gap-4 px-4">
      <MenuIcon />
      <Image
        src="/logo.svg"
        alt="Logo"
        width={150}
        height={100}
        className="object-contain hidden lg:block"
      />
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={20}
        className="object-contain lg:hidden"
      />
      <div className="items-center gap-4 hidden lg:flex">
        <Button text="Login" />
        <Button text="Sign Up" gradient />
      </div>
    </div>
  );
};

export default Navbar;
