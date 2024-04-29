const { app, BrowserWindow } = require('electron')

const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    await win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow().then(_ => console.log('Window created'))
})

