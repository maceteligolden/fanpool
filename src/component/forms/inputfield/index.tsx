// "use client"
// import { ReactNode, useState } from "react";
// import styles from './index.module.css';
// import UserIcon from "../../icons/user.icon";
// import LockIcon from "@/component/icons/lock.icon";

// type inputType = "email" | "text" | "password"

// export default function InputField({
//     label="sample label",
//     placeholder="sample placeholder",
//     icon,
//     type="text",
//     error=false,
//     value,
//     name,
//     onChange
// }:{
//     label?: string,
//     placeholder?: string,
//     icon?: ReactNode,
//     type: inputType,
//     error: boolean,
//     value?: string,
//     name?: string,
//     onChange?: any
// }){

//     const [inputType, setInputType] = useState<boolean>(false);

//     const togglePasswordHandler = () => {
//         setInputType((state) => !state);
//     }

//     const toggle = () => {
//         return inputType ? "text" : "password"
//     }

//     return (
//         <>
//             <div className="flex flex-col gap-2 w-full">
//                 <label className="text-base font-normal text-[#1C1C1C]">{label}</label>
//                 <div className={styles.inputfieldcontainer}>
//                     <div className="flex flex-row items-center gap-2">
//                         {icon && (
//                             icon
//                         )}
//                         <input
//                             name={name}
//                             type={type !== "password" ?  type : toggle()}
//                             placeholder={placeholder}
//                             className={styles.inputfield}
//                             value={value}
//                             onChange={onChange}
//                         />
//                     </div>
//                     {type === "password" && (
//                         <PasswordToggle status={inputType} onClick={togglePasswordHandler}/>
//                     )}
//                     {error}
//                 </div>
//             </div>
//         </>
//     )
// }

// function PasswordToggle({onClick, status}: {
//     onClick: () => void,
//     status: boolean
// }){
//     return (
//         <>
//             <div onClick={onClick}>
//                 {status ? (
//                     <LockIcon/>
//                 )
//                 :
//                 (
//                     <UserIcon/>
//                 )}
//             </div>

//         </>
//     )
// }
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const InputVariants = cva(
  "w-full inline-flex flex-row items-center justify-center gap-2 border rounded-[8px] border-[#ECECEC] bg-[#F9FAFB] p-[16px] focus:border-purple-600",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "max-w-[383px] h-[56px]",
        sm: "max-w-[185px] h-[56px]",
        md: "",
        lg: "max-w-[450px] h-[56px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface InputIconProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface InputContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof InputVariants> {}

const InputContainer = React.forwardRef<HTMLDivElement, InputContainerProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(InputVariants({ className, variant, size }))}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
InputContainer.displayName = "InputContainer";

const InputIcon = React.forwardRef<HTMLDivElement, InputIconProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);
InputIcon.displayName = "InputIcon";

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, ...props }, ref) => {
    return <input className="focus:outline-0 w-full bg-transparent" type={type} {...props} ref={ref} />;
  }
);

InputField.displayName = "InputField";

export { InputContainer, InputIcon, InputField };
