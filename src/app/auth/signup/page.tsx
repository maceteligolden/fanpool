"use client"
import Button from "@/component/forms/button";
import InputField from "@/component/forms/inputfield";
import CreateAccountIcon from "@/component/icons/create-account.icon";
import IdentificationIcon from "@/component/icons/identification.icon";
import LockIcon from "@/component/icons/lock.icon";
import MailIcon from "@/component/icons/mail.icon";
import UserIcon from "@/component/icons/user.icon";
import VerificationIcon from "@/component/icons/verification.icon";
import useSignUp from "@/hooks/useSignUp";
import { ISignUpInput } from "@/interfaces/auth.interface";
import Link from "next/link";

export default function Page(){

    const {register, otp, showVerification} = useSignUp(); 

    return (
        <>
            {!showVerification ? 
                (
                    <Registeration 
                        onClick={register.onSubmit} 
                        onChange={register.onChange}
                        values={register.values} 
                        touched={register.touched} 
                        errors={register.errors}
                    />
                ) : 
                (
                    <Verification 
                        onClick={otp.onSubmit} 
                        onChange={otp.onChange} 
                        values={otp.values} 
                        touched={otp.touched} 
                        errors={otp.errors}
                    />
                )
            }
        </>
    )
}

function Registeration({
    onClick,
    onChange,
    values,
    touched,
    errors
}: {
    onClick: () => void,
    onChange: any,
    values: ISignUpInput,
    touched: any,
    errors: any
}) {
    return (
        <>
        <div className="flex flex-col gap-8 w-full">
            <header className="flex flex-col items-center gap-2 mb-8">
                <CreateAccountIcon/>
                <h2 className="text-4xl font-medium not-italic text-dark-blue">Create Account</h2>
            </header>
            <div className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-2 gap-4 w-full">
                <InputField 
                    type={"text"} 
                    error={touched.firstname && Boolean(errors.firstname)}
                    name={'firstname'}
                    value={values.firstname} 
                    onChange={onChange}
                    label="First Name"
                    placeholder="First Name"
                    icon={
                        <UserIcon/>
                    }
                />
                <InputField 
                    type={"text"} 
                    error={touched.lastname && Boolean(errors.lastname)} 
                    name={'lastname'}
                    value={values.lastname} 
                    onChange={onChange}
                    label="Last Name"
                    placeholder="Last Name"
                    icon={
                        <UserIcon/>
                    }
                />
                </div>
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
                    type={"text"} 
                    error={touched.phone && Boolean(errors.phone)} 
                    name={'phone'}
                    value={values.phone} 
                    onChange={onChange}
                    label="Phone Number"
                    placeholder="Phone Number"
                    icon={
                        <MailIcon/>
                    }
                />

                <InputField 
                    type={"text"} 
                    error={touched.username && Boolean(errors.username)} 
                    name={'username'}
                    value={values.username} 
                    onChange={onChange}
                    label="Username"
                    placeholder="E.g Daniela"
                    icon={
                        <UserIcon/>
                    }
                />
            
                <div className="flex flex-col gap-1">
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
                    <p className="text-xs text-[#484848]">Must be at least 8 characters with a combination of letters and numbers</p>
                </div>
            </div>
                    
            <div className="flex flex-col gap-1">
                <Button label={"Continue"} onClick={onClick}/>
                <div className="flex flex-row self-center">
                    <p>Already have an account? <Link href={'/auth/signin'} className="text-primary">Login</Link></p>
                </div>
            </div>
        </div>
    </>
    )
}

function Verification({
    onClick,
    onChange,
    values,
    touched,
    errors
}: {
    onClick: () => void,
    onChange: any,
    values: {otp: string},
    touched: any,
    errors: any
}){
    return (
        <>
            <div className="flex flex-col gap-8 items-center w-full">
                <VerificationIcon/>

                <section className="flex flex-col gap-4 items-center text-center w-full">
                    <h2 className="text-4xl">OTP Verification</h2>
                    <p>We have sent a code to your Phone Number <br/> *******5210</p>
                </section>

                <InputField 
                    type={"text"} 
                    error={touched.otp && Boolean(errors.otp)}
                    name={'otp'}
                    value={values.otp} 
                    onChange={onChange} 
                    label="OTP Verification"
                    placeholder="Enter Code"
                    icon={
                        <IdentificationIcon/>
                    }
                />

                <div className="flex flex-row items-center self-start">
                    <p>Did not receive? <Link href="#" className="text-primary">Click to resend</Link></p>
                </div>

                <Button label={"Create Account"} onClick={onClick}/>
            </div>
        </>
    )
}