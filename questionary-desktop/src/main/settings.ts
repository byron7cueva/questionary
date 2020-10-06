import { ipcMain, IpcMainEvent } from 'electron';
import electronSettings from 'electron-settings';

import { Settings } from '../types/Settings';

export function setupSettings(): void {
  ipcMain.on('set-settings', (event: IpcMainEvent, settings: Settings) => {
    setSettings(event, settings);
  });

  ipcMain.on('get-settings', (event: IpcMainEvent) => {
    getSettings(event);
  });
}

async function setSettings(event: IpcMainEvent, settings: Settings) {
  await electronSettings.set('urlServer', settings.urlServer);
  event.sender.send('saved-settings', settings);
}

async function getSettings(event: IpcMainEvent) {
  const urlServer = await electronSettings.get('urlServer');
  const settings: Settings = {
    urlServer: urlServer.toString()
  };
  event.sender.send('load-settings', settings);
}