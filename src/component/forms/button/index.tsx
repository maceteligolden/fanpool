// "use client"
// import styles from './index.module.css';

// export default function Button({
//     label,
//     type="submit",
//     onClick
// }:{
//     label: string;
//     type?: "submit";
//     onClick: () => void
// }){
//     return (
//         <>
//             <button type={type} onClick={onClick} className={styles.button}>
//                 {label}
//             </button>
//         </>
//     )
// }
import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const ButtonVariants = cva("inline-flex items-center justify-center rounded-[8px] font-medium font-red-hat text-base leading-[16px] capitalize text-white w-full", 
{
  variants: {
    variant: {
      default: "bg-purple-600",
      outline: "",
    },
    size: {
      default: "max-w-[383px] h-[56px]",
      sm: "",
      md: "",
      lg: "",
      icon: "w-6 h-6"
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      ></button>
    );
  }
);
Button.displayName = "Button";

export { Button };
