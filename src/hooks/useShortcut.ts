import { useRefProps } from '@gdjiami/hooks'
import { remote } from 'electron'
import { useEffect } from 'react'

/**
 * 监听指定的快捷键
 * @param accelerator 快捷键字符串
 */
export function useGlobalShortcut(accelerator: string, callback: () => void) {
  const callbackRef = useRefProps(callback)

  useEffect(() => {
    console.debug(`正在注册 ${accelerator}`)
    remote.globalShortcut.register(accelerator, () => {
      console.debug(`${accelerator} is Pressed`)
      callbackRef.current()
    })

    return () => {
      remote.globalShortcut.unregister(accelerator)
    }
  }, [])
}
