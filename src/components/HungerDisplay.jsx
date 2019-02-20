import React from 'react';
import PropTypes from 'prop-types';

import {STYLES} from '../styles';

function HungerDisplay(props){

  return(
    <div style={STYLES.statBarOutter}>
      <div style={ {...STYLES.statBarInner, width: (props.hungerLevel+ '%')} }>
        <span style={STYLES.statBarText}>Hunger</span>
        &nbsp;
      </div>
    </div>
  );
}

HungerDisplay.propTypes = {
  hungerLevel: PropTypes.number
};

export default HungerDisplay;
