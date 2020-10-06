import { createStore, Store } from "redux";

import { InitialState, DispatchAction } from './types';
import { rootReducer } from './reducer';

const initialState: InitialState = {
    settings: {
        urlServer: ''
    }
};

export const store: Store = createStore<InitialState, DispatchAction, null, null>(rootReducer, initialState);