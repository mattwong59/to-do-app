import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    goals: ""
  }

  componentDidMount() {
    const goalTypes = document.getElementsByClassName('dropdown-content');
    this.setState({goals: goalTypes[0]});
  }

  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log(this.state.goals);
      this.state.goals.classList.toggle('open');
    }
    return (
      <div className="App">
          <h1>To Do App</h1>
          <form>
            <label htmlFor="goal">New Goal</label>
            <input id="goal" type="text" name="goal" />
            <div onClick={handleClick.bind(this)} className="dropdown">
              <button className="dropbtn">Dropdown</button>            
              <div className="dropdown-content">
                <a>Daily</a>
                <a>Core</a>
                <a>Short-term</a>
                <a>Long-term</a>
              </div>
            </div>
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
