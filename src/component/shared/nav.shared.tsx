import * as React from 'react'
import { NavList } from '@/content'

export default function Navigation(): JSX.Element {
  return (
    <div className="flex flex-row justify-between items-center bg-black-300 py-2 px-6 fixed bottom-0 w-full">
      {NavList.length > 0
        ? NavList.map((el, idx) => (
            <div
              key={idx}
              className="flex items-center flex-col w-[56px] gap-1"
            >
              {el.icon} <p>{el.title}</p>
            </div>
          ))
        : ''}
    </div>
  )
}
