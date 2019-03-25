import React, { FC } from 'react'
import styled from 'styled-components/macro'

export interface WebviewProps {
  src: string
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header``
const Actions = styled.aside``
const Action = styled.div``
const Body = styled.main`
  width: 100%;
  flex: 1;
`

export const Webview: FC<WebviewProps> = props => {
  return (
    <Container>
      <Header>
        <Actions>
          <Action>Back</Action>
          <Action>Go</Action>
          <Action>Refresh</Action>
        </Actions>
        <Actions>
          <Action>Copy</Action>
          <Action>Menu</Action>
        </Actions>
      </Header>
      <Body>
        <webview src={props.src} />
      </Body>
    </Container>
  )
}

export default Webview
