import { resolve } from 'app-root-path'

export const WindowHost =
  process.env.NODE_ENV === 'development'
    ? `${process.env.PROTOCOL}://${process.env.ADDRESS}:${process.env.PORT}`
    : `file://${resolve(process.env.DIST!)}`

/**
 * 获取窗口链接
 * @param name 页面名称
 */
export function getPageUrl(name: string) {
  return `${WindowHost}/${name}.html`
}
