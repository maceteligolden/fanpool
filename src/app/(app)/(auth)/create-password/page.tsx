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
import CreatePasswordIcon from "@/component/icons/create-password.icon";
import IdentificationIcon from "@/component/icons/identification.icon";
import VerificationIcon from "@/component/icons/verification.icon";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function CreatePassword() {
  return (
    <div className="mb-12">
      <div className="max-w-[400px] mx-auto flex flex-col items-center justify-center gap-2">
        <CreatePasswordIcon />
        <div className="text-center">
          <p className="font-graphik text-2xl leading-[36px] font-medium text-black-900">
            Create New Password
          </p>
          <p className="font-red-hat mt-2">
            We have sent you a password reset link to your email, click the link
            login back into your account.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>New Password</span>
          <InputContainer className="">
            <InputIcon>{ICONS.lock}</InputIcon>
            <InputField type="password" placeholder="Enter Password" />
            <Button variant="outline" size="icon">
              {ICONS.showPassword}
            </Button>
          </InputContainer>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>Confirm Password</span>
          <InputContainer className="">
            <InputIcon>{ICONS.lock}</InputIcon>
            <InputField type="password" placeholder="Enter Password" />
            <Button variant="outline" size="icon">
              {ICONS.showPassword}
            </Button>
          </InputContainer>
        </label>
        <Button type="submit" className=" mt-12">
          <p>Create Account</p>
        </Button>
      </div>
    </div>
  );
}
