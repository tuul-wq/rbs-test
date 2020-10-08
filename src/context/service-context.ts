import React from 'react';
import LocalService from 'Services/local.service';
import RbsService from 'Services/rbs.service';

export const ServiceContext  = React.createContext({
  offline: null! as LocalService,
  online: null! as RbsService
});
