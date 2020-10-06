import { Reducer } from 'redux';

import { InitialState, ActionType, DispatchAction} from './types';

export const rootReducer: Reducer<InitialState, DispatchAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SetUrlServer:
      return { ...state, settings: action.payload.settings };
    default: return state;
  }
};