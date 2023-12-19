import * as React from 'react'
import {
  Button,
  InputField,
  InputContainer,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/component/forms'
import {
  CreateAccountIcon,
  LockIcon,
  MailIcon,
  ShowPasswordIcon,
  UserIcon
} from '@/component/icons'
import Link from 'next/link'

export default function CreateAccountPage(): JSX.Element {
  return (
    <div className="mb-12">
      <div className="max-w-[232px] mx-auto flex flex-col items-center justify-center gap-2">
        <CreateAccountIcon />
        <p className="font-graphik text-2xl leading-[36px] font-medium text-foreground">
          Create Account
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <div className="w-full flex gap-2">
          <label htmlFor="" className="flex flex-col gap-2 items-start">
            <span className='text-foreground'>Email</span>
            <InputContainer className="" size="sm">
              <UserIcon />
              <InputField type="text" placeholder="First Name" />
            </InputContainer>
          </label>
          <label htmlFor="" className="flex flex-col gap-2 items-start">
            <span className='text-foreground'>Last Name</span>
            <InputContainer className="" size="sm">
              <UserIcon />
              <InputField type="text" placeholder="Last Name" />
            </InputContainer>
          </label>
        </div>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span className="text-foreground">Email Address</span>
          <InputContainer className="">
            <MailIcon />
            <InputField type="email" placeholder="Email" />
          </InputContainer>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span className="text-foreground">Phone Number</span>
          <div className="flex flex-row gap-1 justify-between w-full">
            <Select>
              <SelectTrigger className="w-[87px] h-[56px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+234">+234</SelectItem>
              </SelectContent>
            </Select>
            <InputContainer className="">
              <InputField type="text" placeholder="Phone Number" />
            </InputContainer>
          </div>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span className="text-foreground">Username</span>
          <InputContainer className="">
            <UserIcon />
            <InputField type="text" placeholder="Username" />
          </InputContainer>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 items-start">
          <span className="text-foreground">Password</span>
          <InputContainer className="">
            <LockIcon />
            <InputField type="password" placeholder="Enter Password" />
            <Button variant="outline" size="icon">
              <ShowPasswordIcon />
            </Button>
          </InputContainer>
        </label>
        <div className="text-center mt-4">
          <Button type="submit" className="">
            <p>continue</p>
          </Button>
          <p className="mt-8">
            Already Have an account?{' '}
            <Link className="text-purple-600" href="/login-account">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
