import React from 'react';
import PropTypes from 'prop-types';

function ActionButton(props){
  let className = 'fas '+props.buttonName;

  return(
    <div style={{display: 'inline-block'}}>
      <button onClick={()=> props.onButtonClick(props.onButtonClickParam)}><i className={className}></i></button>
    </div>
  );
}

ActionButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onButtonClickParam: PropTypes.string.isRequired
};

export default ActionButton;
