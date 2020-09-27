import { useEffect } from 'react';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import { useHistory } from 'react-router-dom';

export function useMenuNavigate (): void {
  const history = useHistory();

  useEffect(() => {
    ipcRenderer.on('navigate', handleNavigate);

    return () => {
      ipcRenderer.off('navigate', handleNavigate);
    }
  }, []);

  const handleNavigate = (event: IpcRendererEvent, to: string) => {
    history.push(to);
  }
}