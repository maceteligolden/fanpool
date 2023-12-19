import { CaretLeftIcon } from '../icons'

export default function Breadcrumb({
  pageTitle
}: {
  pageTitle: string
}): JSX.Element {
  return (
    <div className="bg-black-300 flex items-center px-5 py-[14px]">
      <CaretLeftIcon />
      <p className="font-red-hat text-[20px] font-medium leading-[14px] text-center max-w-[350px] w-full">{pageTitle}</p>
    </div>
  )
}
