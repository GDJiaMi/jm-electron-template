import React, { FC } from 'react'
import styled from 'styled-components/macro'
import WindowBar from '~/components/WindowBar'

export interface HeaderProps {
  avatar?: string
  name: string
  enname?: string
  desc?: string
}

const Container = styled.header`
  background-color: #2a87dd;
`
const UserInfo = styled.div`
  padding: 5px;
  display: flex;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const Avatar = styled.div<{ src: string }>`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-image: url(${props => props.src});
`
const Name = styled.h1`
  color: white;
  font-weight: normal;
  font-size: 18px;
  margin: 0;
`
const Desc = styled.div`
  font-size: 13px;
  color: #c3c3c3;
  margin-top: 8px;
`

const Header: FC<HeaderProps> = props => {
  return (
    <Container>
      <WindowBar />
      <UserInfo>
        <Avatar src={props.avatar || require('./sample.jpg')} />
        <Info>
          <Name>
            {props.name}
            {props.enname && `(${props.enname})`}
          </Name>
          <Desc>{props.desc}</Desc>
        </Info>
      </UserInfo>
      {props.children}
    </Container>
  )
}

export default Header
