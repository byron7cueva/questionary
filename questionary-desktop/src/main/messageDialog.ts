import {
  ipcMain,
  IpcMainEvent,
  dialog,
  BrowserWindow,
  MessageBoxReturnValue
} from 'electron';
import { MessageDialogOptions } from '../types/MessageDialogOptions';

function setupMessageDialog(window: BrowserWindow): void {
  ipcMain.on('show-dialog', (event: IpcMainEvent, options: MessageDialogOptions) => {
    dialog.showMessageBox(window, {
      ...options,
      buttons: ['Aceptar']
    });
  });

  ipcMain.on('show-error-dialog', (event: IpcMainEvent, title: string, message: string) => {
    dialog.showErrorBox(title, message);
  });

  ipcMain.on('show-question', (event: IpcMainEvent, title: string, message: string) => {
    dialog.showMessageBox(window, {
      type: 'question',
      title,
      message,
      buttons: ['Aceptar', 'Cancelar']
    })
    .then((result: MessageBoxReturnValue) => {
      if (result.response === 0) {
        event.sender.send('acept-dialog');
      } else {
        event.sender.send('cancel-dialog');
      }
    })
  });
}

export {
  setupMessageDialog
}