import React from 'react';
import HungerDisplay from './HungerDisplay';
import SleepDisplay from './SleepDisplay';
import PlayDisplay from './PlayDisplay';
import InputButtons from './InputButtons';
import LifeController from './LifeController';
import SuiSlider from './SuiSlider';

import {STYLES} from '../styles';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      life: true,
      hunger: 99,
      play: 99,
      sleep: 99,
      difficulty: 1
    };
    this.handleIsAlive = this.handleIsAlive.bind(this);
    this.handleAddLife = this.handleAddLife.bind(this);
    this.handleSuiSlider = this.handleSuiSlider.bind(this);
  }

  componentDidMount() {
    this.globalTimer = setInterval( () =>
      this.updateLifeStats(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.globalTimer);
  }

  updateLifeStats() {
    this.setState((state) => {
      return {
        hunger: state.hunger -= this.state.difficulty,
        play: state.play -= this.state.difficulty,
        sleep: state.sleep -= this.state.difficulty
      };
    });
    this.handleIsAlive();
  }

  handleSuiSlider(value) {
    this.setState({difficulty: value});
  }

  handleAddLife(statusName) {
    this.setState((state) => {
      return { [statusName] : state[statusName] < 94 ? state[statusName]+= 5 : 100 };
    });
  }

  handleIsAlive() {
    if ((this.state.hunger && this.state.play && this.state.sleep) <= 0) {
      this.setState({life: false});
      clearInterval(this.globalTimer);
    }
  }

  render(){
    return (
      <div style={STYLES.tamagotchiBody}>

        <div style={STYLES.content}>

          <SuiSlider onSuiSlider={this.handleSuiSlider} difficulty={this.state.difficulty}/>
          <div style={STYLES.screen}>
            <LifeController lifeStatus={this.state.life}/>
            <HungerDisplay hungerLevel={this.state.hunger}/>
            <SleepDisplay sleepLevel={this.state.sleep}/>
            <PlayDisplay playLevel={this.state.play}/>
          </div>
          <div style={{ display: 'table',  margin: '0 auto'}}>
            <InputButtons onButtonClick={this.handleAddLife}/>
          </div>


        </div>


      </div>
    );
  }
}

export default App;
