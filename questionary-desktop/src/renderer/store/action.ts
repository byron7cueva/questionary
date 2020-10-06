import { ActionType, InitialState, DispatchAction } from './types';
import { Settings } from '../../types/Settings';

export const setUrlServerAction = (settings: Settings): DispatchAction => {
  const payload: Partial<InitialState> = {
    settings
  };
  return {
    type: ActionType.SetUrlServer,
    payload
  }
}