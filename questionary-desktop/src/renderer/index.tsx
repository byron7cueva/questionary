import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { App } from './App';

render(
  <Provider store={store}>
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  </Provider>,
  document.getElementById('app')
);