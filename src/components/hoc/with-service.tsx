import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'Store/store';
import { ServiceContext } from '../../context/service-context';

const withService = (alwaisOnline = false) => (WrappedComponent: any) =>
  (props: any) => {
    const isLoggedIn = useSelector<AppState>(state => state.user.isLoggedIn);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const setNetworkStatus = (value: boolean) => () => setIsOnline(value);

    useEffect(() => {
      window.addEventListener('online', setNetworkStatus(true));
      window.addEventListener('offline', setNetworkStatus(false));
      return () => {
        window.removeEventListener('online', setNetworkStatus(true));
        window.removeEventListener('offline', setNetworkStatus(false));
      }
    }, []);

    const services = useContext(ServiceContext);
    const service = alwaisOnline || (isLoggedIn && isOnline) ? services.online : services.offline;

    return <WrappedComponent {...props}  service={service} />;
}

export default withService;
