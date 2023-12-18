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
import IdentificationIcon from "@/component/icons/identification.icon";
import VerificationIcon from "@/component/icons/verification.icon";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="mb-12">
      <div className="max-w-[400px] mx-auto flex flex-col items-center justify-center gap-2">
        <VerificationIcon />
        <div className="text-center">
          <p className="font-graphik text-2xl leading-[36px] font-medium text-black-900">
            OTP Verification
          </p>
          <p className="font-red-hat mt-2">
            We have sent a code to your Email Address jon@doe.com
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>OTP Verification</span>
          <InputContainer className="">
            <InputIcon>
              <IdentificationIcon />
            </InputIcon>
            <InputField type="text" placeholder="Enter Code" />
          </InputContainer>
        </label>
        <p className="">
          Did not recieve?{" "}
          <Link className="text-purple-600" href="/login-account">
            Click to resend
          </Link>
        </p>

        <Button type="submit" className="">
          <p>Create Account</p>
        </Button>
      </div>
    </div>
  );
}
