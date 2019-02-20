import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';

function InputButtons(props){
  return(
    <div>
      <ActionButton
        buttonName='fa-hamburger'
        onButtonClick={props.onButtonClick}
        onButtonClickParam='hunger'/>

      <ActionButton
        buttonName='fa-bed'
        onButtonClick={props.onButtonClick}
        onButtonClickParam='sleep'/>

      <ActionButton
        buttonName='fa-football-ball'
        onButtonClick={props.onButtonClick}
        onButtonClickParam='play'/>
    </div>
  );
}

InputButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};

export default InputButtons;
