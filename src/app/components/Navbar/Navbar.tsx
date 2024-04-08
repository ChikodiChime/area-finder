import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center z-10 w-full h-[70px] px-[20px] sm:px-[50px] md:px-[80px] fixed">
        <Image
          width={100}
          height={40}
          layout="fixed"
          src={"/Logo.svg"}
          alt="Logo"
          style={{ objectFit: "contain" }}
        />

        <a href="#" className=" text-[#557FF2] font-bold">LOGIN</a>
      </nav>
    </>
  );
};

export default Navbar;
