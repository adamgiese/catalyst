import { createSelector } from 'reselect';

const getTimestamp = (state) => {
  return state && state.game ? state.game.timestamp : false;
};

export const getIsGameCreated = createSelector(
  [
    getTimestamp,
  ],
  (timestamp) => {
    return !!timestamp;
  }
);
