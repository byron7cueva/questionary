import './assets/css/index.css';
import React, { useEffect } from 'react';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import { Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { GlobalStyle } from './styles/global';
import { CoursePage } from './pages/CoursePage';
import { Courses } from './pages/Courses';
import { Search } from './pages/Search';
import { SettingsModal } from './containers/SettingsModal';
import { ILocationState } from './types/ILocationState';
import { setUrlServerAction } from './store/action';
import { Settings } from '../types/Settings';

const AppComponent = (props: any): JSX.Element => {
  const location = useLocation<ILocationState>();
  const modal = location.state && location.state.modal;

  const loadSettings = (event: IpcRendererEvent, settings: Settings) => {
    props.setUrlServerAction(settings);
  }

  useEffect(() => {
    ipcRenderer.send('get-settings');
    ipcRenderer.on('load-settings', loadSettings);

    return () => {
      ipcRenderer.off('load-settings', loadSettings);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Switch location={modal || location}>
        <Route exact path="/" component={Search} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:courseId" component={CoursePage} />
      </Switch>
      { modal && (
        <Route exact path="/settings">
          <SettingsModal />
        </Route>
      )}
    </>
  );
}

const mapDispatchToProps = {
  setUrlServerAction
};

const App = connect(null, mapDispatchToProps)(AppComponent);

export {App};