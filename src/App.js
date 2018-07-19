import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
      <div>
        
      </div>

      </div>
    );
  }
}

export default App;

// Countown component
// Add a new component file called Countdown.js
// Inside Countdown.js, create a component called Countdown
// Following the patterns in the Counter.js file, make the Countdown component decrement the value instead of incrementing.
// In App.js, import Countdown.js
// In the convertNumToCounter, return a Countdown component instead of a Counter component.
// Mixing the Countdown and Counter components
// Modify the _handleClick method in App.js, so that it generates a random integer and uses it for the newObj's value
// Modify the convertNumToCounter function.If the number is even, return a Counter.If it is odd, return a Countdown
// Setting a limit
// When converting the number to a Counter(or Countdown), also pass in a "finalValue" prop
// The finalValue should be the initialValue * 10(and you should make it positive or negative based on whether you are returning a Counter or a Countdown)
// Modify your Counter and Countdown to stop incrementing or decrementing when the finalValue prop has been reached.