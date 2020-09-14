import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './components/common/app/app';
import RbsService from './services/rbs.service';
import { ServiceContext } from './context/serviceContext';
import './index.scss';
import LocalService from './services/local.service';

const services = {
  offline: new LocalService(),
  online: new RbsService()
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ServiceContext.Provider value={services}>
        <App />
      </ServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
