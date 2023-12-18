import * as React from "react";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-[100vh] min-w-[100vw]">{children}</main>
    </>
  );
}
