import React, { useState, useEffect } from 'react';
import { ipcRenderer, IpcRendererEvent} from 'electron';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { InitialState } from '../store/types';
import { setUrlServerAction } from '../store/action';
import { Modal } from '../components/Modal';
import { SettingsApp } from '../components/SettingsApp';
import { Settings } from '../../types/Settings';

const SettingsModalComponent = (props: any): JSX.Element => {
  const history = useHistory();
  const [urlServer, setUrlServer] = useState(props.settings.urlServer);

  const clickSaveHandler = () => {
    const config: Settings = { urlServer };
    ipcRenderer.send('set-settings', config);
  }

  const changeSettingsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlServer(event.target.value);
  }

  const saveSettingsHandler = (event: IpcRendererEvent, settings: Settings) => {
    props.setUrlServerAction(settings);
    history.goBack();
  }


  useEffect(() => {
    ipcRenderer.on('saved-settings', saveSettingsHandler);
    return () => {
      ipcRenderer.off('saved-settings', saveSettingsHandler);
    }
  }, []);

  return (
     <Modal onClickSave={clickSaveHandler}>
      <SettingsApp urlServer={urlServer} onChangeSettings={changeSettingsHandler} />
    </Modal>
  );
}

const mapStateToProps = (state: InitialState) => {
  return {
    settings: state.settings
  }
};

const mapDispatchToProps = {
  setUrlServerAction
};

const SettingsModal = connect(mapStateToProps, mapDispatchToProps)(SettingsModalComponent);

export {
  SettingsModal
}
