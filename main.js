const { app, BrowserWindow } = require("electron");

function crearVentana() {
  const ventanaPrincipal = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./assets/favicon.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  ventanaPrincipal.loadFile("index.html");
}

app.whenReady().then(crearVentanaPrincipal);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  crearVentana();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    crearVentana();
  }
});