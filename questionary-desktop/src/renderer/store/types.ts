import { Action } from 'redux';
import { Settings } from '../../types/Settings';

export interface InitialState {
  settings: Settings;
}

export enum ActionType {
  SetUrlServer
}

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>;
}