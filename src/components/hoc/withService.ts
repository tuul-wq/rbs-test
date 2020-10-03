import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ServiceContext } from '../../context/service-context';

const withService = (alwaisOnline = false) => (WrappedComponent) =>
(props) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const setNetworkStatus = (value) => () => setIsOnline(value);

  useEffect(() => {
    window.addEventListener('online', setNetworkStatus(true));
    window.addEventListener('offline', setNetworkStatus(false));
    return () => {
      window.removeEventListener('online', setNetworkStatus());
      window.removeEventListener('offline', setNetworkStatus());
    }
  }, []);

  const services = useContext(ServiceContext);
  const service = alwaisOnline || (isLoggedIn && isOnline) ? services.online : services.offline;

  return (
    <WrappedComponent {...props}  service={service} />
  )
}

export default withService;
