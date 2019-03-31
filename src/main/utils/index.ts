import { resolve } from 'app-root-path'
import { BrowserViewConstructorOptions, BrowserWindow } from 'electron'
import pageConfigs from '~/pages'

export const WindowHost =
  process.env.NODE_ENV === 'development'
    ? `${process.env.PROTOCOL}://${process.env.ADDRESS}:${process.env.PORT}`
    : `file://${resolve(process.env.DIST)}`

/**
 * 获取窗口链接
 * @param name 页面名称
 */
export function getPageUrl(name: string) {
  return `${WindowHost}/${name}.html`
}

/**
 * 打开页面
 * @param name
 * @param config
 */
export function openPage(name: string, config: BrowserViewConstructorOptions = {}) {
  const defaultConfig = pageConfigs[name] || {}
  const win = new BrowserWindow({ ...defaultConfig, ...config })
  win.loadURL(getPageUrl(name))

  return win
}
