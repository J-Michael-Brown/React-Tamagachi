import React from 'react';
import PropTypes from 'prop-types';

import {STYLES} from '../styles';


function SuiSlider(props) {
  let sliderSlide = React.createRef();

  // let difficultyLevels = [
  //   <>
  // ]

  return(
    <div style={STYLES.suiSlider}>
      <input min='1' step='1' max='10' type='range' value={props.difficulty} ref={sliderSlide} onChange={()=>props.onSuiSlider(parseInt(sliderSlide.current.value))}/>
    </div>);
}

SuiSlider.propTypes={
  onSuiSlider: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired
};

export default SuiSlider;
