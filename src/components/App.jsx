import React from 'react';
import HungerDisplay from './HungerDisplay';
import SleepDisplay from './SleepDisplay';
import PlayDisplay from './PlayDisplay';
import InputButtons from './InputButtons';
import LifeController from './LifeController';

import {STYLES} from '../styles';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      life: true,
      hunger: 15,
      play: 75,
      sleep: 55
    };

    this.handleIsAlive = this.handleIsAlive.bind(this)

  }

  componentDidMount() {
    this.globalTimer = setInterval( () =>
      this.updateLifeStats(),
      2000
    );
  }

  componentWillUnmount(){
    clearInterval(this.globalTimer)
}

  updateLifeStats() {
    console.log("one step closer to death");

    this.setState((state) => {
      return {
        hunger: state.hunger -= 1,
        play: state.play -= 1,
        sleep: state.sleep -= 1
      }
    })

    this.handleIsAlive()

  }

  handleIsAlive() {
    if ((this.state.hunger && this.state.play && this.state.sleep) <= 0) {
      this.setState({life: false});
      clearInterval(this.globalTimer)
    }
  }


  render(){
    return (
      <div style={STYLES.tamagotchiBody}>
        <div style={STYLES.screen}>
          <LifeController lifeStatus={this.state.life}/>
          <HungerDisplay hungerLevel={this.state.hunger}/>
          <SleepDisplay sleepLevel={this.state.sleep}/>
          <PlayDisplay playLevel={this.state.play}/>
          <InputButtons />
        </div>
      </div>
    );
  }
}

export default App;
