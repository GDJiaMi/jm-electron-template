import React, { FC } from 'react'
import styled from 'styled-components/macro'

import WindowButtons, { WindowButtonsProps } from '../WindowButtons'

const Container = styled.div`
  -webkit-app-region: drag;
  position: relative;
  width: 100%;
  height: 25px;
`
const Title = styled.div`
  font-size: 13px;
  padding: 3px 6px;
  color: #111;
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
  title?: React.ReactNode
  left?: React.ReactNode
  right?: React.ReactNode
  children?: React.ReactNode
}

export const WindowBar: FC<WindowBarProps> = props => {
  const { left, title, right, ...other } = props
  return (
    <Container>
      <Left>
        {!!title && <Title>{title}</Title>}
        {left}
      </Left>
      <Right>
        {right}
        <WindowButtons {...other} />
      </Right>
    </Container>
  )
}

export { WindowButtons }
export default WindowBar
