import React, { FC } from 'react'

import WindowBar, { WindowBarProps } from '../WindowBar'

import './style.css'

export interface PageProps extends WindowBarProps {
  buttons?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const Page: FC<PageProps> = props => {
  const { style, className, children, buttons, ...other } = props
  return (
    <div className={`page ${className || ''}`} style={style}>
      <WindowBar {...other} children={buttons} />
      <div className="page__body">{children}</div>
    </div>
  )
}

export default Page
