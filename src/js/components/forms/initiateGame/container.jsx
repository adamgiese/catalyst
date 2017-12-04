import { connect } from 'react-redux';
import {
  initiateGame
} from '../../../services/game/actions';
import InitiateGameForm from './component.jsx';

const mapStateToProps = state => ({
  isActive: state,
});

const mapDispatchToProps = dispatch => ({
  onInitiation: (player, timestamp) => {
    dispatch(initiateGame({
      player,
      timestamp,
    }));
  },
});

const InitiateGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitiateGameForm);

export default InitiateGameContainer;
