import { useEffect } from 'react';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import { useHistory, useLocation } from 'react-router-dom';

import { ILocationState } from '../types/ILocationState';

export function useMenuNavigate (): void {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    ipcRenderer.on('navigate', handleNavigate);

    return () => {
      ipcRenderer.off('navigate', handleNavigate);
    }
  }, []);

  const handleNavigate = (event: IpcRendererEvent, to: string, state: ILocationState) => {
    history.push(to, state.modal? {modal: location} : undefined);
  }
}