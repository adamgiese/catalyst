/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const currentSocietyPoints = (props) => {
  const military = props.currentGameState.military;
  const economy = props.currentGameState.economy;
  return (
    <div>
      <ul>
        <li>Military Points: {military}</li>
        <li>Economy Points: {economy}</li>
      </ul>
    </div>
  );
};
export default currentSocietyPoints;
