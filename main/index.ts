import { app, BrowserWindow } from 'electron'

app.on('ready', () => {
  const win = new BrowserWindow({ width: 500, height: 500 })
  win.loadURL(`https://localhost:8080/index.html`)
})
