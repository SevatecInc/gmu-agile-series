import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Aren't we awesome?!
          </p>
          
          <TodoHeader />
        </header>
      </div>
    );
  }
}

export default App;
