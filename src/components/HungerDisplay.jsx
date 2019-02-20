import React from 'react';

import {STYLES} from '../styles';

function HungerDisplay(){
  return(
    <div style={STYLES.statBarOutter}>
      <div style={{...STYLES.statBarInner, width: '50%'}}>
        <span style={{color: 'green'}}>Hunger</span>
        &nbsp;
      </div>
    </div>
  );
}

export default HungerDisplay;
