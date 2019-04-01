import React, { FC } from 'react'

export const WindowButton: FC<{ onClick?: () => void }> = props => {
  return (
    <div className="window-button" onClick={props.onClick}>
      {props.children}
    </div>
  )
}
