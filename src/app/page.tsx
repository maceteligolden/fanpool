import FacebookIcon from "@/component/icons/facebook";
import Instagram from "@/component/icons/instagram";
import LinkedlnIcon from "@/component/icons/linkedln";
import Logo from "@/component/icons/logo";
import XIcon from "@/component/icons/x";
import Hero from "@/pages/Hero";
import Why from "@/pages/Why";
import Works from "@/pages/Works";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Works />
      <Why />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <>
      <nav className="container flex flex-row justify-center items-center py-[17px]">
        <Logo />
      </nav>
    </>
  );
}

const socialLinks: any[] = [
  {
    url: "",
    logo: <Instagram />,
  },
  {
    url: "",
    logo: <LinkedlnIcon />,
  },
  {
    url: "",
    logo: <FacebookIcon />,
  },
  {
    url: "",
    logo: <XIcon />,
  },
];

function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-[57px] bg-[#161616] text-white md:px-[280px] md:py-[140px] px-[24px] py-[40px]">
        <div className="flex flex-col gap-[46px]  md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col gap-[19px]">
            <Logo />
            <small className="text-lg font-normal">
              Where Players Banter and Make Earnings.
            </small>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h4 className="text-[32px] font-bold">Stay Updated</h4>
            <div className="flex flex-row gap-[17px]">
              {socialLinks.map((socialLink: any, index: number) => {
                return (
                  <Link key={index} href={socialLink.url}>
                    {socialLink.logo}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <hr className="text-white border-white" />

        <p className="text-white text-base">© 2023 Fanpool</p>
      </footer>
    </>
  );
}
