import React from "react";
import Image from "next/image";
import Button from "./components/Buttons/Button";
import Navbar from "./components/Navbar/Navbar";

const page = () => {
  return (
    <>
      <Navbar/>
      <main className="flex w-full h-screen px-[20px] sm:px-[50px] md:px-[80px]  items-center gap-14 lg:gap-20">
        <div className=" w-full md:w-1/2 lg:w-[60%] sm:text-center md:text-left   ">
          <div className="w-full lg:w-[80%] flex flex-col items-start sm:items-center md:items-start justify-center gap-4">
            <h1 className=" leading-tight">
              Find a place you will love to live!
            </h1>
            <p>
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </p>
            <div className="relative  w-full ">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Enter Address"
                className="border border-[#D4DCF1] bg-[#F3F7FE] rounded-md pl-10 py-4 w-full"
              />
              <Image
                src={"/searchIcon.svg"}
                alt="search icon"
                width={12}
                height={12}
                className="absolute top-[38%] left-5"
                style={{}}
              />
            </div>
            <Button >
              SEARCH
            </Button>
          </div>
        </div>
        <div className=" relative h-full hidden md:block ">
          <div className="overlay"></div>
          <Image
            src={"/heroImg.svg"}
            alt="hero image"
            width={100}
            height={100}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
      </main>
    </>
  );
};

export default page;
