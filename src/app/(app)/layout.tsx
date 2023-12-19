'use client'
import * as React from 'react'
import { ThemeProvider } from '@/component/themeProvider'
import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from 'next-themes'
export default function AppLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className="min-h-[100vh] min-w-[100vw] bg-background">{children}</main>
      </ThemeProvider>
    </>
  )
}
