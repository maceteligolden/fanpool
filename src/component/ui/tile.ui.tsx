import * as React from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn.utils'

const tileVariants = cva('dark:bg-black-300 rounded-[4px]', {
  variants: {
    variant: {
      default: ''
    },
    size: {
      default: 'max-w-[382px] w-full'
    }
  }
})

interface TileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tileVariants> {}

const Tile = React.forwardRef<HTMLDivElement, TileProps>(
  ({ children, className, size, variant, ...props }, ref) => {
    return (
      <div className={cn(className, size, variant)} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)
Tile.displayName = 'Tile'

export { Tile }
