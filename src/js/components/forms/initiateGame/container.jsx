import { connect } from 'react-redux';
import { initiateGame } from '../../../services/game/actions';
import { getIsGameCreated } from '../../../services/game/selectors';
import InitiateGameForm from './component.jsx';

const mapStateToProps = state => ({
  isGameCreated: getIsGameCreated(state),
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
