import { Button, InputField, InputContainer } from '@/component/forms'
import {
  LoginAccountIcon,
  ShowPasswordIcon,
  MailIcon,
  LockIcon
} from '@/component/icons'
import Link from 'next/link'

export default function LoginAccountPage(): JSX.Element {
  return (
    <div className="mb-12">
      <div className="max-w-[232px] mx-auto flex flex-col items-center justify-center gap-2">
        <LoginAccountIcon />
        <p className="font-graphik text-2xl leading-[36px] font-medium text-foreground">
          Login Account
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span className='text-foreground'>Email</span>
          <InputContainer className="">
            <MailIcon />
            <InputField type="email" placeholder="Email" />
          </InputContainer>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span className='text-foreground'>Password</span>
          <InputContainer className="">
            <LockIcon />
            <InputField type="password" placeholder="Enter Password" />
            <Button variant="outline" size="icon">
              <ShowPasswordIcon />
            </Button>
          </InputContainer>
        </label>
        <Link href="/forgot-password" className="font-red-hat font-medium">
          Forgot Password?
        </Link>
        <div className="text-center">
          <Button type="submit" className="">
            <p>Login Account</p>
          </Button>
          <p className="mt-8">
            Don&apos;t Have an account?{' '}
            <Link className="text-purple-600" href="/create-account">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
