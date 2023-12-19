import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn.utils'

const InputVariants = cva(
  'w-full inline-flex flex-row items-center justify-center gap-2 border rounded-[8px] border-[#ECECEC] bg-[#F9FAFB] p-[16px] focus:border-purple-600',
  {
    variants: {
      variant: {
        default: ''
      },
      size: {
        default: 'max-w-[383px] h-[56px]',
        sm: 'max-w-[185px] h-[56px]',
        md: '',
        lg: 'max-w-[450px] h-[56px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface InputContainerProps
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
    )
  }
)
InputContainer.displayName = 'InputContainer'

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, ...props }, ref) => {
    return (
      <input
        className="focus:outline-0 w-full bg-transparent"
        type={type}
        {...props}
        ref={ref}
      />
    )
  }
)

InputField.displayName = 'InputField'

export { InputContainer, InputField }
