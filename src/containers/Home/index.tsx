/**
 * 首页
 */
import React, { FC, useState } from 'react'
import styled from 'styled-components/macro'
import { User } from '~/model/type'

import Header from './components/Header'
import Search from './components/Search'

const Container = styled.div``
const Body = styled.div``

export const Home: FC<{}> = props => {
  const [user] = useState<User>({ name: '李京泽', enname: 'youxi', desc: '你好世界' })
  return (
    <Container>
      <Header name={user.name} enname={user.enname} avatar={user.avatar} desc={user.desc}>
        <Search />
      </Header>
      <Body />
    </Container>
  )
}

export default Home
