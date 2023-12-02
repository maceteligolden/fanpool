"use client"
import Button from "@/component/forms/button";
import InputField from "@/component/forms/inputfield";
import LockIcon from "@/component/icons/lock.icon";
import MailIcon from "@/component/icons/mail.icon";
import useSignIn from "@/hooks/useSignIn";
import Link from "next/link";

export default function Page(){

   const {touched, errors, values, onChange, onSubmit} = useSignIn();

    return (
        <>
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 w-full">
                <InputField 
                    type={"email"} 
                    error={touched.email && Boolean(errors.email)}
                    name={'email'}
                    value={values.email} 
                    onChange={onChange}
                    label="Email Address"
                    placeholder="Email Address"
                    icon={
                        <MailIcon/>
                    }
                />
              
                <InputField 
                    type={"password"} 
                    error={touched.password && Boolean(errors.password)} 
                    name={'password'}
                    value={values.password} 
                    onChange={onChange}
                    label="Password"
                    placeholder="Enter Password"
                    icon={
                        <LockIcon/>
                    }
                />
            </div>
            <div>
                <Link href='/auth/forgotpassword'>
                    Forgot Password?
                </Link>
            </div>
            <Button label={"Login Account"} onClick={onSubmit}/>

            <div className="flex flex-row self-center gap-2">
                    <p>Don’t have an account? <Link href={'/auth/signup'} className="text-primary">Sign Up</Link></p>
            </div>
        </div>
        </>
    )
}