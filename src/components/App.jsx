import React from 'react';
import HungerDisplay from './HungerDisplay';
import SleepDisplay from './SleepDisplay';
import PlayDisplay from './PlayDisplay';
import InputButtons from './InputButtons';

import {STYLES} from '../styles'

function App() {
  return (
    <div style={STYLES.tamagotchiBody}>
      <div style={STYLES.screen}>
        <HungerDisplay />
        <SleepDisplay />
        <PlayDisplay />
        <InputButtons />
      </div>
    </div>
  );
}

export default App;
