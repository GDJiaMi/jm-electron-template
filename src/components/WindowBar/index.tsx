import React, { FC } from 'react'
import styled from 'styled-components/macro'

import WindowButtons, { WindowButtonsProps } from '../WindowButtons'

const Container = styled.div`
  -webkit-app-region: drag;
  position: relative;
  width: 100%;
  height: 25px;
`
const Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
const Left = styled(Right)`
  left: 0;
  right: unset;
`

export interface WindowBarProps extends WindowButtonsProps {
  left?: React.ReactNode
  right?: React.ReactNode
  children?: React.ReactNode
}

export const WindowBar: FC<WindowBarProps> = props => {
  const { left, right, ...other } = props
  return (
    <Container>
      {!!left && <Left>{left}</Left>}
      <Right>
        {right}
        <WindowButtons {...other} />
      </Right>
    </Container>
  )
}

export default WindowBar
