import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'Store/store';
import App from 'Components/common/app/app';
import RbsService from 'Services/rbs.service';
import { ServiceContext } from 'Context/serviceContext';
import LocalService from 'Services/local.service';
import './index.scss';

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
