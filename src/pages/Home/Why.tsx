import * as React from "react";
import ClockIcon from "@/component/icons/clock";
import ContestTrophyIcon from "@/component/icons/contest-trophy";
import InfoIcon from "@/component/icons/info";
import Image from "next/image";
import { whyLists, contestsList } from "@/content/why.content";

export default function Why() {
  return (
    <>
      <section className="container px-6">
        <div className="mt-[48px] md:mt-[56px] md:px-[129px] py-[80px]">
          <h3 className="text-white md:text-[48px] text-[27px] font-graphik font-semibold text-center">
            Why Fanpool?
          </h3>
          <div className="flex flex-col md:flex-row gap-12 mt-12">
            <div className="flex flex-col gap-[20px]">
              {whyLists.map((whyList: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="max-w-[500px] w-full h-full bg-black-500 text-white md:rounded-2xl rounded-xl md:p-[24px] p-[17px]"
                  >
                    {whyList.icon}

                    <div className="md:text-base font-red-hat text-sm mt-4">
                      {whyList.title}
                      <br /> <br />
                      {whyList.description}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative md:w-[560.276px] md:h-[600px] h-[400px]">
              <Image src="/phone-mock.png" alt="phone mock" fill={true} />
            </div>
          </div>
        </div>
        <div className="card-gradient md:mt-[56px] py-[35.53px] md:py-[126px] px-[21.38px] md:px-[75px] text-white max-w-[1360px] max-h-[494px] md:rounded-3xl rounded-lg">
          <div className="max-w-[163px] md:max-w-[580px] w-full">
            <h2 className="font-bold md:text-[48px] text-[14px] leading-[14.87px] md:leading-[52.8px] font-graphik">
              Monetize Your Favorite Fantasy Games in One Place.
            </h2>
            <p className="font-normal md:text-[24px] text-[7px] font-red-hat mt-[5px] md:mt-[18px]">
              {" "}
              Monetize your passion and enjoy a seamless, centralized hub for
              your fantasy gaming adventures.
            </p>
          </div>
        </div>
        <div className="my-[48px] md:my-[80px] flex flex-col md:gap-[48px] gap-[24px] items-center">
          <h2 className="font-bold md:text-[48px] text-[14px] text-white max-w-[830px] w-full font-graphik text-center">
            Dive into <span className="text-[#D5B0FF]">the excitement</span> of
            various contests
          </h2>
          <div className="flex contest-container gap-3 flex-nowrap">
            {contestsList.map((contest: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col md:w-full w-[339.764px] rounded-[10px] overflow-hidden"
                >
                  <div className="contest-header flex flex-row items-center justify-center">
                    <ContestTrophyIcon />
                  </div>
                  <div className="flex flex-row justify-between items-center bg-[#22252C] p-[11px]">
                    <div className="flex flex-row gap-2">
                      <Image
                        src="/field.svg"
                        width={"41"}
                        height={"41"}
                        alt={"field"}
                      />
                      <div className="flex flex-col">
                        <p className="text-white font-normal">
                          {contest.title}
                        </p>
                        <div className="flex flex-row items-center gap-3">
                          <span className="text-[14px] text-[#D5B0FF]">
                            Fanpool
                          </span>
                          <span className="h-1 w-1 bg-[#D5B0FF] rounded-full"></span>
                          <span className="flex flex-row gap-1 items-center text-[12px] text-white">
                            <ClockIcon />
                            08 : 11 : 46
                          </span>
                        </div>
                      </div>
                    </div>
                    <InfoIcon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
