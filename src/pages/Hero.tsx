import * as React from "react";
import ArrowIcon from "@/component/icons/arrow-icon";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="flex flex-col gap-8 max-w-[986px] w-full text center mx-auto mt-[80px] md:mt-[140px] items-center px-4">
        <div>
          <h1 className="font-bold font-graphik text-center md:text-5xl text-2xl text-white leading-[35.2px] md:leading-[70.4px] max-h-[200px] h-full">
            Automate{" "}
            <span className="text-[#D5B0FF]">
              Your Real-Money Fantasy Premier League
            </span>
            <br />
            Contests.
          </h1>
          <p className="font-red-hat max-w-[777px] w-full mx-auto text-white md:text-[24px] text-[16px] text-center mt-[8px]">
            Say bye-bye to spreadsheets, bank receipts and multiple apps. Coming
            Soon!!!
          </p>
        </div>
        <button className="flex items-center w-[170px] h-[46px] justify-center text-purple-500 font-medium gap-2 rounded-[4px] border border-purple-500">
          <p className="text-base font-red-hat">Learn More</p> <ArrowIcon />
        </button>
      </div>

      <div className=" h-[680px] mt-[-300px]">
        <Image
          src={"/hero-cover.png"}
          alt="hero cover"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="hidden md:flex"
        />
        <Image
          src={"/mobile-hero-cover.png"}
          alt="hero cover"
          fill={true}
          style={{ objectFit: "cover" }}
          className="md:hidden flex"
        />
      </div>
    </section>
  );
}
