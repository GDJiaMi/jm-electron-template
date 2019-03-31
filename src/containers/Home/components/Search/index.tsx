import React, { FC } from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 8px 5px;
  font-size: 13px;
  color: white;
`

export const Search: FC<{}> = props => {
  return <Container>搜索</Container>
}

export default Search
