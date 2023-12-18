import { Button } from "@/component/forms/button";
import CreateAccountIcon from "@/component/icons/create-account.icon";
import EmailSentIcon from "@/component/icons/email-sent.icon";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function EmailReset() {
  return (
    <div className="mb-12">
      <div className="max-w-[400px] mx-auto flex flex-col items-center justify-center gap-2">
        <EmailSentIcon />
        <div className="text-center">
          <p className="font-graphik text-2xl leading-[36px] font-medium text-black-900">
            Reset Link Sent
          </p>
          <p className="font-red-hat mt-2">
            We have sent you a password reset link to your email, click the link
            login back into your account.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-14">
        <Button type="submit" className="">
          <p>Login Account</p>
        </Button>
      </div>
    </div>
  );
}
