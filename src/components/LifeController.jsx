import React from 'react';
import PropTypes from 'prop-types'

function LifeController(props){
  let message = 'broken';
  if(props.lifeStatus){
    message = 'alive!';
  } else {
    message = 'ded';
  }

  return(
    <div>
      {message}
    </div>
  );
}

LifeController.propTypes = {
  lifeStatus: PropTypes.bool.isRequired
}

export default LifeController;
