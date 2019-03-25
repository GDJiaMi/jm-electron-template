import React from 'react'
import ReactDOM from 'react-dom'
import Webview from '~/components/Webview'

const src = decodeURIComponent(window.location.search.slice(1))

ReactDOM.render(<Webview src={src} />, document.getElementById('root'))
