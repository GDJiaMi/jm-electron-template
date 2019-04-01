/**
 * 注册main进程handler
 */
import main from '@gdjiami/jsonrpc-electron/main'

import { openPage } from '../utils'

export default function registerHandlers() {
  const rpc = main()

  rpc.registerHandler('echo', async (params, source) => {
    return params
  })

  rpc.registerHandler('ping', async () => 'pong')

  /**
   * 打开一个页面并返回一个webContentsID
   */
  rpc.registerHandler('openPage', async (name: string) => {
    const win = openPage(name)
    return win.webContents.id
  })
}
