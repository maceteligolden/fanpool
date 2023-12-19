import * as React from 'react'
import {
  BellIcon,
  CaretRightIcon,
  EarningsIcon,
  PlusIcon,
  SmallLogoIcon,
  ThemeIcon,
  USDCIcon
} from '@/component/icons'
import { Navigation } from '@/component/shared'
import { Tile } from '@/component/ui'
import { NigerianFlag } from '@/component/flags'
import { SettingsList } from '@/content'
import Link from 'next/link'
import { Button, Switch } from '@/component/forms'
import Image from 'next/image'

export default function DashboardPage(): JSX.Element {
  return (
    <>
      <div className="flex justify-between items-center py-2 px-6 w-full">
        <SmallLogoIcon />
        <div className="flex items-center gap-2">
          <Button variant="icon" size="icon">
            <BellIcon />
          </Button>
          <div className="w-[116px] h-[32px] bg-black-300 rounded-[44px] flex justify-between items-center">
            <div className="w-[32px] h-[32px] rounded-full bg-[#7600FF] inline-flex items-center justify-center">
              <USDCIcon />
            </div>
            <p className="font-graphik font-semibold">5000</p>
            <div className=" w-[22px] h-[22px] rounded-full bg-[#00D866] inline-flex items-center justify-center mr-1">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 mt-[42px]">
        <div className="max-w-[129px] w-full mx-auto flex flex-col items-center justify-center gap-4">
          <div className="bg-purple-600 rounded-full w-16 h-16 overflow-hidden flex items-center justify-center relative">
            <Image
              src={'/avatar.svg'}
              width={43}
              height={70}
              alt="User Avatar"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-red-hat text-[18px] font-extrabold">
              Jack Daniyel
            </p>
            <p className="font-red-hat text-purple-500">@jackDan</p>
          </div>
        </div>
        <div className="flex justify-between gap-2 mt-[14px]">
          <Tile className="flex items-center px-[48px] py-[14px] bg-black-300 flex-col max-w-[180px]  justify-center rounded-[4px] gap-1 w-full">
            <EarningsIcon />
            <p className="text-[10px] font-red-hat">My Earnings</p>
            <p className="font-graphik text-[14px] font-bold leading-[16px] text-purple-500">
              $120,000
            </p>
          </Tile>
          <Tile className="flex items-center px-[48px] py-[14px] bg-black-300 flex-col max-w-[180px] w-full rounded-[4px] gap-1">
            <NigerianFlag />
            <p className="text-[10px] font-red-hat">Country</p>
            <p className="font-graphik text-[14px] font-bold leading-[16px] text-purple-500">
              Nigeria
            </p>
          </Tile>
        </div>
        <div className="flex gap-[10px] flex-col mt-[28px] pb-[80px]">
          {SettingsList.length > 0
            ? SettingsList.map((el, idx) => (
                <Link key={idx} href={el.href}>
                  <Tile className="flex w-full justify-between items-center p-4 bg-black-300 rounded-[4px]">
                    <div className="flex gap-2 items-center">
                      {el.icon}
                      <p className="font-red-hat text-base font-semibold">
                        {el.title}
                      </p>
                    </div>
                    <CaretRightIcon />
                  </Tile>
                </Link>
              ))
            : ''}
          <Tile className="flex w-full justify-between items-center p-4 bg-black-300 rounded-[4px]">
            <div className="flex gap-2 items-center">
              <ThemeIcon />
              <p className="font-red-hat text-base font-semibold">Theme</p>
            </div>
            <Switch />
          </Tile>
        </div>
      </div>
      <Navigation />
    </>
  )
}
