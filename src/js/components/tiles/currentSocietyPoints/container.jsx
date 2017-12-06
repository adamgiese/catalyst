import { connect } from 'react-redux';
import { getCurrentGameState } from '../../../services/game/selectors';
import currentSocietyPoints from './component.jsx';

const mapStateToProps = state => ({
  currentGameState: getCurrentGameState(state),
});

const currentSocietyPointsContainer = connect(
  mapStateToProps,
)(currentSocietyPoints);

export default currentSocietyPointsContainer;
