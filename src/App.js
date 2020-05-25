import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
  value1: Math.floor(Math.random() * 100),
  value2: Math.floor(Math.random() * 100),
  value3: Math.floor(Math.random() * 100),
  numberOfQuestions: numQuestions,
  correctAnswers: numCorrect
  }

updateCorrectAnswers = (value, flag) => {
  let actualAnswer = this.state.value1 + this.state.value2 + this.state.value3;
  if(((value === actualAnswer) && flag) || ((value !== actualAnswer) && !flag)) {
    this.setState((prevState) => ({
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    correctAnswers: prevState.correctAnswers + 1,
    numberOfQuestions: prevState.numberOfQuestions + 1
    }))
  } else {
    this.setState((prevCount) => ({
     value1: Math.floor(Math.random() * 100),
     value2: Math.floor(Math.random() * 100),
     value3: Math.floor(Math.random() * 100),
     numberOfQuestions: prevCount.numberOfQuestions + 1
    }))
  }
}
  render() {
    const proposedValue = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedValue}`}</p>
          </div>
          <button onClick={() => this.updateCorrectAnswers(proposedValue, true)}>True</button>
          <button onClick={() => this.updateCorrectAnswers(proposedValue, false)}>False</button>
          <p className="text">
            Your Score: {this.state.correctAnswers}/{this.state.numberOfQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
