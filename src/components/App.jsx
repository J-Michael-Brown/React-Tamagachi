import React from 'react';
import HungerDisplay from './HungerDisplay';
import SleepDisplay from './SleepDisplay';
import PlayDisplay from './PlayDisplay';
import InputButtons from './InputButtons';

import {STYLES} from '../styles';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      life: true,
      hunger: 55,
      play: 75,
      sleep: 15
    };

  }

  componentDidMount() {
    setInterval( () =>
      this.updateLifeStats(),
      2000
    );
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
    // let newMasterTicketList = this.state.masterTicketList.slice();
    // newMasterTicketList.forEach((ticket) =>
    //   ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    // );
    // this.setState({masterTicketList: newMasterTicketList})
  }


  render(){
    return (
      <div style={STYLES.tamagotchiBody}>
        <div style={STYLES.screen}>
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
