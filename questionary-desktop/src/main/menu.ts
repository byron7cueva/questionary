import { Menu, BrowserWindow } from 'electron';

function navigate(mainWindow: BrowserWindow, to: string, state: unknown = {}): void {
  mainWindow.webContents.send('navigate', to, state);
}

export function setupMenu(mainWindow: BrowserWindow): void {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Search',
          click: navigate.bind(this, mainWindow, '/', {})
        },
        {
          label: 'Courses',
          click: navigate.bind(this, mainWindow, '/courses', {})
        }
      ]
    },
    {
      label: 'Settings',
      submenu: [
        {
          label: 'Server',
          click: navigate.bind(this, mainWindow, '/settings', { modal: true })
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}