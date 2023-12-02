import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'flex flex-row justify-center bg-black'}>
        <main className="sm:w-[500px] w-full h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
