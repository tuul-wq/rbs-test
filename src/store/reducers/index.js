function reducers(state, action) {
  if (state === undefined) {
    return initialStore;
  }

  switch(action.type) {
    case 'PROFILE_SAVED':
      return state;
    case 'PARAM_UPDATED':
      return state;
    default:
      return state;
  }
}

const initialStore = {
  profiles: [{
    // selectProfile,
    profileName: '',
    // not saving
    systemAddress: '/payment/',
    userName: 'test',
    password: 'test_password',
    currency: '643',
    numberInSystem: '202081022446736',
    pennyOrderSum: '100',
    language: 'ru',
    returnAddress: '../merchants/test/finish.html',
    orderDescription: '',
    clientId: '',
    bondId: ''
  }]
};

export default reducers;