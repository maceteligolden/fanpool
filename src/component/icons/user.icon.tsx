import type { IconProps } from '@/interfaces/index'

export default function UserIcon({
  width = '20',
  height = '20'
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
          d="M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66666 7.67428 6.66666 5.83333C6.66666 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z"
          stroke="#7600FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11.6667C6.77834 11.6667 4.16666 14.2783 4.16666 17.5H15.8333C15.8333 14.2783 13.2217 11.6667 10 11.6667Z"
          stroke="#7600FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}
