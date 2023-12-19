import * as React from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn.utils'

const ButtonVariants = cva(
  'inline-flex items-center justify-center rounded-[8px] font-medium font-red-hat text-base leading-[16px] capitalize text-white w-full',
  {
    variants: {
      variant: {
        default: 'bg-purple-600',
        outline: 'w-[170px] h-[46px]  text-purple-500 gap-2 border border-purple-500'
      },
      size: {
        default: 'max-w-[383px] h-[56px]',
        sm: '',
        md: '',
        lg: '',
        icon: 'w-6 h-6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      ></button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
