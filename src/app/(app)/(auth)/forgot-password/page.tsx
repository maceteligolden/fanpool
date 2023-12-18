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
import ForgotpasswordIcon from "@/component/icons/forgotpassword.icon";
import IdentificationIcon from "@/component/icons/identification.icon";
import VerificationIcon from "@/component/icons/verification.icon";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="mb-12">
      <div className="max-w-[400px] mx-auto flex flex-col items-center justify-center gap-2">
        <ForgotpasswordIcon />
        <div className="text-center">
          <p className="font-graphik text-2xl leading-[36px] font-medium text-black-900">
            Forgot Password
          </p>
          <p className="font-red-hat mt-2">
          Don&apos;t worry! It happens. Please enter the address associated with your account.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
      <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>Email Address</span>
          <InputContainer className="">
            <InputIcon>{ICONS.email}</InputIcon>
            <InputField type="email" placeholder="Email" />
          </InputContainer>
        </label>
        <Button type="submit" className="">
          <p>Proceed</p>
        </Button>
      </div>
    </div>
  );
}
