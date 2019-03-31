/**
 * 在这里声明页面的窗口配置
 */
import { BrowserWindowConstructorOptions } from 'electron'

export default {
  index: {
    width: 360,
    minWidth: 360,
    height: 780,
    minHeight: 500,
    frame: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
  },
} as { [name: string]: BrowserWindowConstructorOptions }
