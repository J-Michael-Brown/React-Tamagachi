import React from 'react';
import PropTypes from 'prop-types';

import {STYLES} from '../styles';

function SleepDisplay(props){

  return(
    <div style={STYLES.statBarOutter}>
      <div style={ {...STYLES.statBarInner, width: (props.sleepLevel+ '%')} }>
        <span style={STYLES.statBarText}>Sleep</span>
        &nbsp;
      </div>
    </div>
  );
}

SleepDisplay.propTypes = {
  sleepLevel: PropTypes.number
};

export default SleepDisplay;
