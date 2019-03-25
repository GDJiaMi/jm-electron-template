import { app, BrowserWindow } from 'electron'
import { getPageUrl } from '~/main/utils'

console.log('hi')

app.on('ready', () => {
  const win = new BrowserWindow({ width: 500, height: 500 })
  win.loadURL(getPageUrl('index'))
})
