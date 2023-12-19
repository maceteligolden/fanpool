import * as React from 'react'
import { BellIcon, PlusIcon, SmallLogoIcon, USDCIcon } from '@/component/icons'
import { Navigation } from '@/component/shared'
import { Tile } from '@/component/ui'

export default function DashboardPage(): JSX.Element {
  return (
    <>
      <div className="flex justify-between items-center py-2 px-6">
        <SmallLogoIcon />
        <div className="flex items-center gap-2">
          <BellIcon />
          <div className="w-[116px] h-[32px] bg-black-300 rounded-[44px] flex justify-between items-center">
            <div className="w-[32px] h-[32px] rounded-full bg-[#7600FF] inline-flex items-center justify-center">
              <USDCIcon />
            </div>
            <p>5000</p>
            <div className=" w-[22px] h-[22px] rounded-full bg-[#00D866] inline-flex items-center justify-center mr-1">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>photo</div>
        <div>
          <Tile></Tile>
        </div>
        <div>settings</div>
      </div>
      <Navigation />
    </>
  )
}
