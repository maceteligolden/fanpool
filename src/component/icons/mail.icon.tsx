import type { IconProps } from '@/interfaces/index'

export default function MailIcon({
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
          d="M2.5 6.66666L9.0755 11.0503C9.63533 11.4236 10.3647 11.4236 10.9245 11.0503L17.5 6.66666M4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16666 15.8333 4.16666H4.16667C3.24619 4.16666 2.5 4.91286 2.5 5.83333V14.1667C2.5 15.0871 3.24619 15.8333 4.16667 15.8333Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}
