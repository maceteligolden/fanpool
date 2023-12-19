import { Button, InputField, InputContainer } from '@/component/forms'
import { ForgotpasswordIcon, MailIcon } from '@/component/icons'

export default function ForgotPasswordPage(): JSX.Element {
  return (
    <div className="mb-12">
      <div className="max-w-[400px] mx-auto flex flex-col items-center justify-center gap-2">
        <ForgotpasswordIcon />
        <div className="text-center">
          <p className="font-graphik text-2xl leading-[36px] font-medium text-foreground">
            Forgot Password
          </p>
          <p className="font-red-hat mt-2">
            Don&apos;t worry! It happens. Please enter the address associated
            with your account.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span>Email Address</span>
          <InputContainer className="">
            <MailIcon />
            <InputField type="email" placeholder="Email" />
          </InputContainer>
        </label>
        <Button type="submit" className="">
          <p>Proceed</p>
        </Button>
      </div>
    </div>
  )
}
