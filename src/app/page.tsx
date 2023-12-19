import * as React from 'react'
import FacebookIcon from '@/component/icons/facebook.icon'
import Instagram from '@/component/icons/instagram.icon'
import LinkedlnIcon from '@/component/icons/linkedln.icon'
import Logo from '@/component/icons/logo.icon'
import XIcon from '@/component/icons/x.icon'
import { Hero, Why, Works } from '@/pages/Home'
import Link from 'next/link'

export default function HomePage(): JSX.Element {
  return (
    <main className="bg-black-900">
      <Navbar />
      <Hero />
      <Works />
      <Why />
      <Footer />
    </main>
  )
}

function Navbar(): JSX.Element {
  return (
    <>
      <nav className="container flex flex-row justify-center items-center py-[17px]">
        <Link href="/">
          <Logo fill="white" />
        </Link>
      </nav>
    </>
  )
}

const socialLinks: any[] = [
  {
    url: 'https://instagram.com/fanpool_gg',
    logo: <Instagram />
  },
  {
    url: '',
    logo: <LinkedlnIcon />
  },
  {
    url: '',
    logo: <FacebookIcon />
  },
  {
    url: 'https://x.com/Fanpool_gg',
    logo: <XIcon />
  }
]

function Footer(): JSX.Element {
  return (
    <>
      <footer className="flex flex-col gap-[57px] bg-[#161616] text-white md:px-[280px] md:py-[140px] px-[24px] py-[40px]">
        <div className="flex flex-col gap-[46px]  md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col gap-[19px]">
            <Logo fill="white" />
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
                )
              })}
            </div>
          </div>
        </div>

        <hr className="text-white border-white" />

        <p className="text-white text-base">© 2023 Fanpool</p>
      </footer>
    </>
  )
}
