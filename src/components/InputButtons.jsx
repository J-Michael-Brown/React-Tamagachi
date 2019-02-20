import React from 'react';
import PropTypes from 'prop-types';

function InputButtons(props){
  return(
    <div>
      <button onClick={()=> props.onButtonClick('hunger')}>Hunger</button>
      <button onClick={()=> props.onButtonClick('play')}>Hunger</button>
      <button onClick={()=> props.onButtonClick('sleep')}>Hunger</button>
    </div>
  );
}

InputButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};

export default InputButtons;
