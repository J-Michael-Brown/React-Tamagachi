import React from 'react';
import PropTypes from 'prop-types';

import {STYLES} from '../styles';


function SuiSlider(props) {
  let sliderSlide = React.createRef();

  return(
    <div style={STYLES.suiSlider}>
      <input min="1" step='9' max="10" type="range" ref={sliderSlide} onChange={()=>props.onSuiSlider(parseInt(sliderSlide.current.value))}/>
    </div>);
}

SuiSlider.propTypes={
  onSuiSlider: PropTypes.func.isRequired
};

export default SuiSlider;
