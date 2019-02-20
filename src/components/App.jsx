import React from 'react';

const STYLES = {
  tamagotchiBody: {
    border: '1px solid #6b5571',
    margin: '0px auto',
    width: '40em',
    height: '50em',
    borderRadius: '50%',
    backgroundImage: 'radial-gradient(#e064ff, #a172ac, #5e4564)',
    boxShadow: '4px 4px 4px #664d62'
  },
  screen: {
    boxSizing: 'border-box',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#8d5c87b8 #d19fcd63 #d19fcd63 #8d5c87b8',
    width: '70%',
    position: 'relative',
    top: '25%',
    background: 'rgb(186, 186, 186)',
    margin: '0px auto',
    height: '20em',
    boxShadow: 'inset 3px 2px 8px 0px #7f7f7f',
    padding: '1em'
  }
};

function App() {
  return (
    <div style={STYLES.tamagotchiBody}>
      <div style={STYLES.screen}>hi!</div>
    </div>
  );
}

export default App;
