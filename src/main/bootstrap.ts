import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'

import registerHandlers from './handlers'
import logger from './utils/logger'

/**
 * 主进程启动程序
 */
export default async () => {
  registerHandlers()

  if (process.env.NODE_ENV === 'development') {
    try {
      await installExtension(REACT_DEVELOPER_TOOLS)
      logger.info('React 扩展安装成功')
    } catch (err) {
      logger.warn('React 扩展安装失败', err)
    }
  }
}
