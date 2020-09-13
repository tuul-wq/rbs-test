import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/common/app/app';
import RbsService from './services/rbs.service';
import { RbsServiceContext } from './context/RbsServiceContext';
import store from './store/store';
import './index.scss';
// import * as serviceWorker from './serviceWorker';

const service = new RbsService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RbsServiceContext.Provider value={service}>
        <App />
      </RbsServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
