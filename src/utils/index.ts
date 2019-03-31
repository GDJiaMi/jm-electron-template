/**
 * commons helpers
 */
import { remote } from 'electron'

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
