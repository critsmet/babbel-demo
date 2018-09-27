import React, { Component } from 'react';
import Intro from './Intro'
import './App.css';

class App extends Component {
  state = {
    score: 0,
    problem: 0,
  }

  render() {
    return (
      <div className="App">
        <div id="header">
          <div className="logo">
            <img alt="babbel logo" src="https://i.postimg.cc/D097J3pM/Screen_Shot_2018-09-26_at_5.16.35_PM.png"/>
          </div>
          <div className="score">
            Score: {this.state.score}
          </div>
          <div className="progress-bar">
          </div>
          <div className="progress-number">
            1/10
          </div>
          <div className="welcome">
            Welcome!
          </div>
        </div>
        <div className="main">
          <Intro/>
        </div>
      </div>
    );
  }
}

export default App;
