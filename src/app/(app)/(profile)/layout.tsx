import * as React from 'react'
export default function ProfileLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <div className="mx-auto max-w-[430px] w-full min-h-[100vh] relative">
        {children}
      </div>
    </>
  )
}
