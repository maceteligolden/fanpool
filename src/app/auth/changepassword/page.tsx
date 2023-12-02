"use client"
import Button from "@/component/forms/button";
import InputField from "@/component/forms/inputfield";
import LockIcon from "@/component/icons/lock.icon";
import useChangepassword from "@/hooks/useChangepassword";

export default function Page(){

    const {touched, errors, values, onChange, onSubmit} = useChangepassword();

    return (
        <>
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1">
                    <InputField 
                        type={"password"} 
                        error={touched.password && Boolean(errors.password)}
                        name={'password'}
                        value={values.password} 
                        onChange={onChange}
                        label="New Password"
                        placeholder="Enter Password"
                        icon={
                            <LockIcon/>
                        }
                    />
                    <p className="text-xs text-[#484848]">Must be at least 8 characters with a combination of letters and numbers</p>
                </div>
                <InputField 
                    type={"password"} 
                    error={touched.confirmpassword && Boolean(errors.confirmpassword)}
                    name={'confirmpassword'}
                    value={values.confirmpassword} 
                    onChange={onChange}
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    icon={
                        <LockIcon/>
                    }
                />
            </div>
            <Button label={"Create New Password"} onClick={onSubmit}/>
        </div>
        </>
    )
}