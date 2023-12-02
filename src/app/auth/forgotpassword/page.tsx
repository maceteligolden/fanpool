"use client"
import Button from "@/component/forms/button";
import InputField from "@/component/forms/inputfield";
import MailIcon from "@/component/icons/mail.icon";
import useForgotpassword from "@/hooks/useForgotpassword";

export default function Page(){

    const {touched, errors, values, onChange, onSubmit} = useForgotpassword();

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
            </div>
            <Button label={"Create Account"} onClick={onSubmit}/>
        </div>
        </>
    )
}