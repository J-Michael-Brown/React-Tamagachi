import React from 'react';
import Tamagachi from './Tamagachi';
import {Switch, Route} from 'react-router-dom';
import {v4} from 'uuid';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      masterTamagachiList: {},
      selectedTamagachi: null
    };
    this.handleIsAlive = this.handleIsAlive.bind(this);
    this.handleAddLife = this.handleAddLife.bind(this);
    this.handleSuiSlider = this.handleSuiSlider.bind(this);
  }

  componentDidMount() {
    this.globalTimer = setInterval( () =>
      this.updateLifeStats(), (1000/this.state.frameRate)
    );
  }

  componentWillUnmount(){
    clearInterval(this.globalTimer);
  }

  updateLifeStats() {
    this.setState((state) => {
      return {
        hunger: state.hunger -= this.state.difficulty/this.state.frameRate,
        play: state.play -= this.state.difficulty/this.state.frameRate,
        sleep: state.sleep -= this.state.difficulty/this.state.frameRate
      };
    });
    this.handleIsAlive();
  }

  handleAddTamagachi(newTamagachi) {
    let newTamagachiId = v4();
    let
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
      <div>
        <Switch>
          <Router exac path='/' render={() => <Tamagachi
              life={}
            />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
