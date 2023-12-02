import LoginAccountIcon from "@/component/icons/login-account.icon"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex flex-col items-center w-full">
          <header className="flex flex-col items-center gap-2 mb-8">
            <LoginAccountIcon/>
            <h2 className="text-4xl font-medium not-italic text-dark-blue">Login Account</h2>
          </header>
          {children}
      </main>
    )
  }
  