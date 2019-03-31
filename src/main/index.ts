/**
 * 主进程入口
 */
import { app } from 'electron'

import bootstrap from './bootstrap'
import { openPage } from './utils'

app.on('ready', () => {
  bootstrap()
  openPage('index')
})
