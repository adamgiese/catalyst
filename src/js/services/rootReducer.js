import { combineReducers } from 'redux';
import game from './game/reducer';
import turns from './turns/reducer';

export default combineReducers({
  game,
  turns,
});
