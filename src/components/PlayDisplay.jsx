import React from 'react';
import PropTypes from 'prop-types';

import {STYLES} from '../styles';

function PlayDisplay(props){

  return(
    <div style={STYLES.statBarOutter}>
      <div style={ {...STYLES.statBarInner, width: (props.playLevel+ '%')} }>
        <span style={STYLES.statBarText}>Play</span>
        &nbsp;
      </div>
    </div>
  );
}

PlayDisplay.propTypes = {
  playLevel: PropTypes.number
};

export default PlayDisplay;
