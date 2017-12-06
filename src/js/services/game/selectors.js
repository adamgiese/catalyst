import { createSelector } from 'reselect';
import seedrandom from 'seedrandom';

const getTimestamp = (state) => {
  return state && state.game ? state.game.timestamp : false;
};

const getTurns = (state) => {
  return state && state.turns ? state.turns : false;
};

export const getIsGameCreated = createSelector(
  getTimestamp,
  (timestamp) => {
    return !!timestamp;
  }
);

export const getInitialGameState = createSelector(
  getTimestamp,
  (timestamp) => {
    const rng = seedrandom(timestamp);
    return {
      military: rng(10),
      economy: rng(10),
    };
  }
);

export const getCurrentGameState = createSelector(
  [
    getInitialGameState,
    getTurns,
  ],
  (initialGameState, turns) => {
    if (!turns || turns.length === 0) {
      return initialGameState;
    }
    return initialGameState; // TODO: reduce turns to update game state
  }
);
