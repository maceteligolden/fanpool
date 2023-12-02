"use client"
import { ReactNode, useState } from "react";
import styles from './index.module.css';
import UserIcon from "../../icons/user.icon";
import LockIcon from "@/component/icons/lock.icon";

type inputType = "email" | "text" | "password"

export default function InputField({
    label="sample label",
    placeholder="sample placeholder",
    icon,
    type="text",
    error=false,
    value,
    name,
    onChange
}:{
    label?: string,
    placeholder?: string,
    icon?: ReactNode,
    type: inputType,
    error: boolean,
    value?: string,
    name?: string,
    onChange?: any
}){

    const [inputType, setInputType] = useState<boolean>(false);

    const togglePasswordHandler = () => {
        setInputType((state) => !state);
    }

    const toggle = () => {
        return inputType ? "text" : "password"
    }
    
    return (
        <>
            <div className="flex flex-col gap-2 w-full">
                <label className="text-base font-normal text-[#1C1C1C]">{label}</label>
                <div className={styles.inputfieldcontainer}>
                    <div className="flex flex-row items-center gap-2">
                        {icon && (
                            icon
                        )}
                        <input 
                            name={name}
                            type={type !== "password" ?  type : toggle()} 
                            placeholder={placeholder} 
                            className={styles.inputfield}
                            value={value}
                            onChange={onChange}
                        />
                    </div>
                    {type === "password" && (
                        <PasswordToggle status={inputType} onClick={togglePasswordHandler}/>
                    )}
                    {error}
                </div>
            </div>
        </>
    )
}

function PasswordToggle({onClick, status}: {
    onClick: () => void,
    status: boolean
}){
    return (
        <>
            <div onClick={onClick}>
                {status ? (
                    <LockIcon/>
                )
                :
                (
                    <UserIcon/>
                )}
            </div>
            
        </>
    )
}