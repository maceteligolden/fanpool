import Image from "next/image"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
  return (
    <main className="flex flex-col items-center gap-[58.99px] px-[23.45px] py-[41.81px]">
        <Link href={'/auth/signin'}>
          <Image 
              src={"/logo.svg"} 
              alt={"logo"} 
              width={171.34} 
              height={36}
          />
        </Link>
        {children}
    </main>
  )
}
