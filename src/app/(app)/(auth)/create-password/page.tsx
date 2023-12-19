import { Button, InputField, InputContainer } from '@/component/forms'
import {
  CreatePasswordIcon,
  LockIcon,
  ShowPasswordIcon
} from '@/component/icons'

export default function CreatePasswordPage(): JSX.Element {
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
            <LockIcon />
            <InputField type="password" placeholder="Enter Password" />
            <Button variant="outline" size="icon">
              <ShowPasswordIcon />
            </Button>
          </InputContainer>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>Confirm Password</span>
          <InputContainer className="">
            <LockIcon />
            <InputField type="password" placeholder="Enter Password" />
            <Button variant="outline" size="icon">
              <ShowPasswordIcon />
            </Button>
          </InputContainer>
        </label>
        <Button type="submit" className=" mt-12">
          <p>Create Account</p>
        </Button>
      </div>
    </div>
  )
}
