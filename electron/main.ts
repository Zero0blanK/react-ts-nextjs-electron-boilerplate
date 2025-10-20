import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null;
let isDev = !app.isPackaged;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.webContents.on("did-fail-load", (_e, code, desc, url2) => {
    console.error("did-fail-load:", code, desc, url2);
  });
  mainWindow.webContents.on("did-finish-load", () => {
    console.log("did-finish-load:", "http://localhost:3000");
  });

  if (!isDev) {
    mainWindow.loadFile(path.join(__dirname, "../out/index.html"));
    return;
  }

  mainWindow.loadURL(`http://localhost:3000`);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});