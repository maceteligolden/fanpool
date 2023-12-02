import ForgotpasswordIcon from "@/component/icons/forgotpassword.icon"
import LoginAccountIcon from "@/component/icons/login-account.icon"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex flex-col items-center w-full">
          <header className="flex flex-col items-center gap-2 mb-8">
            <ForgotpasswordIcon/>
            <div className="flex flex-col gap-1 items-center">
              <h2 className="text-4xl font-medium not-italic text-darkblue">Forgot Password</h2>
              <p className="text-base self-center text-center text-[#484848]">
                Don't worry! It happens. Please enter the address associated with your account.
              </p>
            </div>
          </header>
          {children}
      </main>
    )
  }
  