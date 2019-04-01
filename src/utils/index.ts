/**
 * commons helpers
 */
import renderer, { Main } from '@gdjiami/jsonrpc-electron/renderer'
import { remote } from 'electron'

const rpc = renderer()

export function getCurrentWindow() {
  return remote.getCurrentWindow()
}

/**
 * 打开工具栏
 */
export function openDevTool() {
  const win = getCurrentWindow()
  win.webContents.openDevTools()
}

export async function openPage(name: string) {
  const id = await rpc.callHandler<number>(Main, 'openPage', name)
  return remote.webContents.fromId(id)
}

/**
 * 生成css 类名
 */
export function cls(
  // tslint:disable-next-line
  opt: { [name: string]: any },
  ...other: string[]
) {
  return Object.keys(opt)
    .filter(key => !!opt[key])
    .concat(other)
    .join(' ')
}
