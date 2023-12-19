import type { IconProps } from '@/interfaces/index'

export default function LockIcon({
  width = '20',
  height = '20',
  fill = '#7600FF'
}: IconProps): JSX.Element {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 12.5V14.1667M5 17.5H15C15.9205 17.5 16.6667 16.7538 16.6667 15.8333V10.8333C16.6667 9.91286 15.9205 9.16667 15 9.16667H5C4.07953 9.16667 3.33334 9.91286 3.33334 10.8333V15.8333C3.33334 16.7538 4.07953 17.5 5 17.5ZM13.3333 9.16667V5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333V9.16667H13.3333Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  )
}
