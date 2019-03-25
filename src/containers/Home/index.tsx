/**
 * App Root Component
 */
import { useTitle } from '@gdjiami/hooks'
import React, { FC } from 'react'
import { hot } from 'react-hot-loader'

export const Home: FC<{}> = props => {
  useTitle('Home')
  return (
    <div>
      <button>webview</button>
    </div>
  )
}

export default hot(module)(Home)
