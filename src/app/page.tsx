import ClockIcon from "@/component/icons/clock";
import ContestTrophyIcon from "@/component/icons/contest-trophy";
import EarnIcon from "@/component/icons/earn";
import FacebookIcon from "@/component/icons/facebook";
import InfoIcon from "@/component/icons/info";
import Instagram from "@/component/icons/instagram";
import InviteIcon from "@/component/icons/invite";
import JoinIcon from "@/component/icons/join";
import LinkedlnIcon from "@/component/icons/linkedln";
import Logo from "@/component/icons/logo";
import SpreedsheetIcon from "@/component/icons/spreedsheet";
import TrophyIcon from "@/component/icons/trophy";
import WalletIcon from "@/component/icons/wallet";
import XIcon from "@/component/icons/x";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
        <Navbar/>
        <Hero/>
        <Works/>
        <Why/>
        <Footer/>
    </main>
  )
}

 function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-center items-center py-[17px] bg-[#1C1D22]">
        <Logo/>
      </nav>
    </>
  )
}

const socialLinks:any[] = [
  {
    url: '',
    logo: <Instagram/>
  },
  {
    url: '',
    logo: <LinkedlnIcon/>
  },
  {
    url: '',
    logo: <FacebookIcon/>
  },
  {
    url: '',
    logo: <XIcon/>
  }
]

function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-[57px] bg-[#161616] text-white md:px-[280px] md:py-[140px] px-[24px] py-[40px]">
        <div className="flex flex-col gap-[46px]  md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-[19px]">
              <Logo/>
              <small className="text-lg font-normal">
                Where Players Banter and Make Earnings.
              </small>
            </div>
            <div className="flex flex-col gap-[24px]">
                <h4 className="text-[32px] font-bold">Stay Updated</h4>
                <div className="flex flex-row gap-[17px]">
                  {
                    socialLinks.map((socialLink: any, index: number)=> {
                      return (
                        <Link key={index} href={socialLink.url}>
                          {socialLink.logo}
                        </Link>
                      )
                    })
                  }
                </div>
            </div>
        </div>

        <hr className="text-white border-white"/>
      
        <p className="text-white text-base">© 2023 Fanpool</p>
      </footer>
    </>
  )
}

const whyLists: any[] = [
  {
    icon: <SpreedsheetIcon/>,
    title: 'Spend Less Time on Spreadsheets and Bank Receipts:',
    description: 'Let Fanpool handle the nitty-gritty while you focus on growing your community and maximizing your commissions.'
  },
  {
    icon: <TrophyIcon/>,
    title: 'Create contests and join contests across multiple leagues: ',
    description: 'Manage your fantasy leagues all in one place.'
  },
  {
    icon: <WalletIcon/>,
    title: 'In-app USDC wallet for fast, safe deposits and cashouts: ',
    description: 'Easily manage your funds without leaving the app.'
  },
];

const contests: any[] = [
  {
    title: 'Last Man Standing'
  },
  {
    title: 'TagTeam Matchups'
  },
  {
    title: 'Intense 1V1 Showdowns'
  }
]

 function Why() {
  return (
    <>
      <section className="bg-[#1C1D22] flex flex-col gap-[48px] md:gap-[80px] px-[24px] py-[48px] md:px-[280px] md:py-[80px]">
        <div className="flex flex-col items-center gap-[35px] md:gap-[48px]">
            <h3 className="text-white md:text-[48px] text-[27px]">Why Fanpool?</h3>
            <div className="flex md:flex-row flex-col gap-[35px] md:gap-[48px]">
              <div className="flex flex-col gap-[20px] basis-3/4">
                {
                  whyLists.map((whyList: any, index: number)=> {
                    return (
                      <div key={index} className="flex flex-col md:gap-[16px] gap-[11px] bg-[#22252C] text-white md:rounded-2xl rounded-xl md:p-[24px] p-[17px]">
                          {whyList.icon}

                          <div className="md:text-base text-sm">
                            {whyList.title}
                            <br/> <br/>
                            {whyList.description}
                          </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="relative md:w-[560.276px] md:h-[600px] h-[400px] w-full basis-3/4">
                <Image src="/phone-mock.png" alt="phone mock" fill={true} />
              </div>
            </div>
        </div>
        <div className="card-gradient text-white md:h-[494.074px] h-[139.12px] w-full md:rounded-3xl rounded-lg md:px-[75.92px] px-[21.37px] flex flex-col md:gap-[18px] gap-[8px] items-start justify-center">
                <h2 className="font-bold md:text-[48px] text-[14px]">Monetize Your Favorite Fantasy Games in One Place.</h2>
                <p className="font-normal md:text-[24px] text-[7px]"> Monetize your passion and enjoy a seamless, centralized hub for your fantasy gaming adventures.</p>
        </div>
        <div className="flex flex-col md:gap-[48px] gap-[24px] items-center">
                <h2 className="font-bold md:text-[48px] text-[14px] text-white">Dive into <span className="text-[#D5B0FF]">the excitement</span> of various contests,</h2>
                <div className="flex contest-container gap-3 flex-nowrap">
                  {
                    contests.map((contest: any, index: number)=> {
                      return (
                        <div key={index} className="flex flex-col md:w-full w-[339.764px] rounded-lg">
                          <div className='contest-header flex flex-row items-center justify-center'>
                            <ContestTrophyIcon/>
                          </div>
                          <div className="flex flex-row justify-between items-center bg-[#22252C] p-[11px]">
                              <div className="flex flex-row gap-2">
                                  <Image src='/field.svg' width={"41"} height={"41"} alt={"field"}/>
                                  <div className="flex flex-col">
                                    <p className="text-white font-normal">{contest.title}</p>
                                    <div className="flex flex-row items-center gap-3">
                                      <span className="text-[14px] text-[#D5B0FF]">Fanpool</span>
                                      <span className="h-1 w-1 bg-[#D5B0FF] rounded-full"></span>
                                      <span className="flex flex-row gap-1 items-center text-[12px] text-white"><ClockIcon/>08 : 11 : 46</span>
                                    </div>
                                  </div>
                              </div>
                              <InfoIcon/>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
        </div>
      </section>
    </>
  )
}

 function Hero(){
  return (
    <section className="relative flex flex-col justify-start bg-[#1C1D22] md:h-[80vh] h-[80vh]">
          <div className="inset-0 w-full h-full flex flex-col items-center text-center gap-[8px] md:px-[400px] px-[24px] pt-[40px] z-20">
              <h1 className="font-bold md:text-[64px] text-[24px] text-white">Automate <span className="text-[#D5B0FF]">Your Real-Money Fantasy Premier League</span> Contests.</h1>
              <p className="text-white md:text-[24px] text-[16px]">
              Say bye-bye to spreadsheets, bank receipts and multiple apps.
            Coming Soon!!!
              </p>
          </div>
          <div className="bottom-0 right-0 left-0 absolute z-10 justify-self-end h-[80%] md:h-[80%] w-full">
            <Image src={'/hero-cover.png'} alt="hero cover" fill={true} className="hidden md:flex"/>
            <Image src={'/mobile-hero-cover.png'} alt="hero cover" fill={true} className="md:hidden flex"/>
          </div>
    </section>
  )
}

const works: any[] = [
  {
    image: '/step1.svg',
    title: 'Join Or Create A Contest',
    description: ' Join existing leagues or create your own cup-style competitions. Sync seamlessly with your current Fantasy Premier League contests.',
    icon: <JoinIcon/>
  },
  {
    image: '/step2.svg',
    title: 'Invite Your Group',
    description: 'Share your contest invite link effortlessly on WhatsApp, Telegram, Facebook, and more. It\'s time to bring your community together.',
    icon: <InviteIcon/>
  },
  {
    image: '/step3.svg',
    title: 'Earn 12x Commissions',
    description: ' Create contests, enjoy the thrill, and cash out! Fanpool magnifies your contests by 12x, offering a payout that matches the excitement. Your commissions just got a major upgrade!',
    icon: <EarnIcon/>
  },
]

 function Works() {
  return(
    <section className="flex flex-col gap-[56px] md:py-[80px] md:px-[288px] py-[40px] px-[23px] bg-[#22252C]">
      <div className="flex flex-col items-start gap-2 text-white">
        <h2 className="text-[40px] font-bold">How it works</h2>
        <p className="text-[16px]"> Focusing on joining or creating contests, inviting groups, and earning commissions</p>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-[72px] flex flex-col gap-[48px]">
        {
          works.map((work: any, index: number)=> {
            return (
              <div className="flex flex-col" key={index}>
                  <div className="relative h-[220px]">
                      <Image src={work.image} alt={work.title} fill={true}/>
                  </div>
                  <div className="p-3 flex flex-col gap-[16px] text-white">
                    <div className="flex flex-row items-center gap-2">
                      {work.icon} <p className="text-[24px] font-normal">{work.title}</p>
                    </div>  
                    <p className="text-[20px]">
                      {work.description}
                    </p>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
