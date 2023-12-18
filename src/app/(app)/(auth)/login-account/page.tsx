
import { Button } from "@/component/forms/button";
import {
  InputContainer,
  InputField,
  InputIcon,
} from "@/component/forms/inputfield";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/forms/select";
import CreateAccountIcon from "@/component/icons/create-account.icon";
import LoginAccountIcon from "@/component/icons/login-account.icon";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function LoginAccount() {
  return (
    <div className="mb-12">
      <div className="max-w-[232px] mx-auto flex flex-col items-center justify-center gap-2">
        <LoginAccountIcon />
        <p className="font-graphik text-2xl leading-[36px] font-medium text-black-900">
          Login Account
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>Email</span>
          <InputContainer className="">
            <InputIcon>{ICONS.email}</InputIcon>
            <InputField type="email" placeholder="Email" />
          </InputContainer>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>Password</span>
          <InputContainer className="">
            <InputIcon>{ICONS.lock}</InputIcon>
            <InputField type="password" placeholder="Enter Password" />
            <Button variant="outline" size="icon">
              {ICONS.showPassword}
            </Button>
          </InputContainer>
        </label>
        <Link href="/forgot-password" className="font-red-hat font-medium">Forgot Password?</Link>
        <div className="text-center">
          <Button type="submit" className="">
            <p>Login Account</p>
          </Button>
          <p className="mt-8">
            Don&apos;t Have an account?{" "}
            <Link className="text-purple-600" href="/create-account">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
