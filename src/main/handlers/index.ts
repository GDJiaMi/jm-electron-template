/**
 * 注册main进程handler
 */
import main from '@gdjiami/jsonrpc-electron/main'

export default function registerHandlers() {
  const rpc = main()

  rpc.registerHandler('echo', async (params, source) => {
    return params
  })

  rpc.registerHandler('ping', async () => 'pong')
}
