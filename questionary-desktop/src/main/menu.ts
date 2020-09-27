import { Menu, BrowserWindow } from 'electron';

function navigate(mainWindow: BrowserWindow, to: string): void {
  mainWindow.webContents.send('navigate', to);
}

export function setupMenu(mainWindow: BrowserWindow): void {
  const template = [
    {
      label: 'Archivo',
      submenu: [
        {
          label: 'Search',
          click: navigate.bind(this, mainWindow, '/')
        },
        {
          label: 'Courses',
          click: navigate.bind(this, mainWindow, '/courses')
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}