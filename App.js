const {app, BrowserWindow} = require('electron')

let MainWindow// 声明主窗体
const WinUrl =`file://${__dirname}/index.html`

/**
 * 创建窗体
 * @constructor
 */
function CreateWindow () {
  // const {width, height} = screen.getPrimaryDisplay().workAreaSize// 获取屏幕工作区
  MainWindow = new BrowserWindow({// 创建主窗体
    width: 1440,
    height: 900,
    minWidth: 1440,
    minHeight: 900,
    // frame: false,
    center: true,
    webPreferences: {webSecurity: false, nativeWindowOpen: true}
  })
  MainWindow.loadURL(WinUrl)// 加载页面
  MainWindow.on('closed', () => { // 监听窗体关闭事件
    MainWindow = null// 清空窗体
    app.quit()// 退出程序
  })
  if (process.env.NODE_ENV !== 'production') MainWindow.webContents.openDevTools()// 开发模式下默认打开调试窗口
  // loadSomeData()
}

app.on('ready', CreateWindow)// 程序准备完毕,加载窗口
app.on('window-all-closed', () => { // 当所有窗口关闭,退出程序
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => { // 当窗体激活,创建窗体
  if (!MainWindow) {
    CreateWindow()
  }
})
