import CreateAccountIcon from "@/component/icons/create-account.icon"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex flex-col items-center w-full">
          {children}
      </main>
    )
  }