'use client'
import * as React from 'react'
import { LogoIcon } from '@/component/icons'
import { useTheme } from 'next-themes'
export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="mx-auto max-w-[430px] min-h-[100vh] w-full px-6">
        <div className="mx-auto pt-[42px] pb-[80px] w-[173px] max-h-[100vh] h-full">
          <LogoIcon fill={theme === 'light' ? 'black' : 'white'} />
        </div>
        {children}
      </div>
    </>
  )
}
