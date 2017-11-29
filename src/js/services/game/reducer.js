const handleActions = (state = {}, action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case 'INIT_GAME':
      return {
        ...state,
        timestamp: payload.timestamp,
        version: payload.version,
      };
    default:
      return state;
  }
};

export default handleActions;
