import React, { ReactNode } from 'react'

interface IContainerProps {
    children: ReactNode;
}

export default function Container({children}: IContainerProps) {
  return (
    <div className='w-screen h-screen'>{children}</div>
  )
}
