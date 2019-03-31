import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import './global.css'

/**
 * React 页面注册
 * @param Page
 */
export default function registerPage(Page: React.ComponentType) {
  const Global: FC<{}> = props => {
    return <Page />
  }

  const HotPage = hot(Global)

  ReactDOM.render(<HotPage />, document.getElementById('root'))
}
