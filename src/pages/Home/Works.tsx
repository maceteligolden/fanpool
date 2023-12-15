import * as Reat from "react";
import Image from "next/image";
import JoinIcon from "@/component/icons/join";
import EarnIcon from "@/component/icons/earn";
import InviteIcon from "@/component/icons/invite";

const works: any[] = [
  {
    image: "/step1.svg",
    title: "Join Or Create A Contest",
    description:
      "Join existing leagues or create your own cup-style competitions. Sync seamlessly with your current Fantasy Premier League contests.",
    icon: <JoinIcon />,
  },
  {
    image: "/step2.svg",
    title: "Invite Your Group",
    description:
      "Share your contest invite link effortlessly on WhatsApp, Telegram, Facebook, and more. It's time to bring your community together.",
    icon: <InviteIcon />,
  },
  {
    image: "/step3.svg",
    title: "Earn 12x Commissions",
    description:
      "Create contests, enjoy the thrill, and cash out! Fanpool magnifies your contests by 12x, offering a payout that matches the excitement. Your commissions just got a major upgrade!",
    icon: <EarnIcon />,
  },
];

export default function Works() {
  return (
    <section className=" bg-black-500 py-[40px] md:py-[80px] px-[8px]" id="works">
      <div className="container text-white px-4 md:px-0">
        <h2 className="text-[40px] font-bold font-red-hat">How it works</h2>
      </div>
      <div className="container flex flex-wrap items-top justify-center mt-[56px] gap-[48px] md:gap-[72px]">
        {works.map((work: any, index: number) => {
          return (
            <div
              className=" flex flex-col max-w-[400px]  h-full w-full p-4"
              key={index}
            >
              <div className="relative h-[261px] max-w-[400px]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex flex-col gap-[16px] text-white">
                <div className="flex flex-row items-center gap-2">
                  {work.icon}{" "}
                  <p className="text-xl font-graphik font-medium">{work.title}</p>
                </div>
                <p className="font-red-hat leading-[26.98px] text-lg">{work.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
