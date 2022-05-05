const { app, BrowserWindow } = require("electron");


function crearVentanaPrincipal() {
  const ventanaPrincipal = new BrowserWindow({
    Width : 1250,
    Height: 700,
    minWidth : 1250,
    minHeight: 700,
    icon : "./assets/icon.ico",
    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  ventanaPrincipal.loadFile("index.html");
  ventanaPrincipal.setMenu(null);
  ventanaPrincipal.setSize(1250, 700);
  ventanaPrincipal.center();

}


if (require('electron-squirrel-startup')) app.quit();
app.whenReady().then(crearVentanaPrincipal);



app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    crearVentanaPrincipal();
  }
});
