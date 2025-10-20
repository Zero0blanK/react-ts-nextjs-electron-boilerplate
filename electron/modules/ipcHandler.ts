import { ipcMain } from "electron";
import path from "path";
import fs from "fs";

module.exports = function setupIpcHandlers() {
  ipcMain.handle("", async () => {
    // Placeholder for IPC handlers
  });

  // Add more IPC handlers as needed
};
