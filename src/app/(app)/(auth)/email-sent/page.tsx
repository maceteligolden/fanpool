import { Button } from '@/component/forms'
import { EmailSentIcon } from '@/component/icons'

export default function EmailResetPage(): JSX.Element {
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
  )
}
