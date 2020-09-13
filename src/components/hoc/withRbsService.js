import React, { useContext } from 'react';
import { RbsServiceContext } from '../../context/RbsServiceContext';

function withRbsService(WrappedComponent) {
  return function(props) {
    const service = useContext(RbsServiceContext);

    return (
      <WrappedComponent {...props}  service={service} />
    )
  }
}

export default withRbsService;
