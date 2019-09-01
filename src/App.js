import React, { Component } from 'react';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate />
        <Counter count={123} step={3} />
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

export default App;