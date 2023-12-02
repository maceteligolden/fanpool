import CreatePasswordIcon from "@/component/icons/create-password.icon"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex flex-col items-center w-full">
          <header className="flex flex-col items-center gap-2 mb-8">
            <CreatePasswordIcon/>
            <div className="flex flex-col gap-1 items-center text-center">
              <h2 className="text-3xl font-medium not-italic text-darkblue">Create New Password</h2>
              <p className="text-sm self-center text-center text-[#828282]">
                We have sent you a password reset link to your email, click the link  login back into your account.
              </p>
            </div>
          </header>
          {children}
      </main>
    )
  }
  