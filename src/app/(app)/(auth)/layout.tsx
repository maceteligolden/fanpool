import Logo from "@/component/icons/logo";
import * as React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto max-w-[430px] min-h-[100vh] w-full px-6">
        <div className="mx-auto pt-[42px] pb-[80px] w-[173px] max-h-[100vh] h-full">
          <Logo fill="black" />
        </div>
        {children}
      </div>
    </>
  );
}
