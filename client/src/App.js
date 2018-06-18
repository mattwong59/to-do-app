import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>To Do App</h1>
          <form>
            
          </form>
          <div className="columns">
            <div>
              <h2>Daily</h2>
              {/* <input name="short term"> */}
            </div>
            <div>
              <h2>Core</h2>
            </div>
            <div>
              <h2>Short-term</h2>
            </div>
            <div>
              <h2>Long-term</h2>
            </div>
            

          </div>
      </div>
    );
  }
}

export default App;
