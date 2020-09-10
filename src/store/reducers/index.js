function reducers(state, action) {
  if (state === undefined) {
    return initialStore;
  }

  switch(action.type) {
    case 'A':
      return state;
    default:
      return state;
  }
}

const initialStore = {
  a: 1
};

export default reducers;