import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    goals: "",
    type: {
      daily: false,
      core: false,
      shortTerm: false,
      longTerm: false
    },
    colDaily: [],
    colCore: [],
    colShortTerm: [],
    colLongTerm: []
  }

  componentDidMount() {
    const goalTypes = document.getElementsByClassName('dropdown-content');
    this.setState({goals: goalTypes[0]});
  }

  render() {
    function handleClick(e) {
      e.preventDefault();
      this.state.goals.classList.toggle('open');
    }

    function handleType(e) {
      e.preventDefault();
      console.log(this.state.type)
      const type = {...this.state.type};
      console.log('type', type)
      type.daily = true;
      this.setState({type})
    }

    return (
      <div className="App">
          <h1>To Do App</h1>
          <form>
            <label htmlFor="goal">New Goal</label>
            <input id="goal" type="text" name="goal" />
            <div onClick={handleClick.bind(this)} className="dropdown">
              <button className="dropbtn">Priority</button>            
              <div className="dropdown-content">
                <input className="choice" type="radio" id="goalChoice1"
                name="contact" value="daily"/>
                <label htmlFor="goalChoice1">Daily</label>
                <input className="choice" type="radio" id="goalChoice2"
                name="contact" value="core"/>
                <label htmlFor="goalChoice2">Core</label>
                <input className="choice" type="radio" id="goalChoice3"
                name="contact" value="shortTerm"/>
                <label htmlFor="goalChoice3">Short Term</label>
                <input className="choice" type="radio" id="goalChoice4"
                name="contact" value="longTerm"/>
                <label htmlFor="goalChoice4">Long Term</label>
                {/* <a onClick={handleType.bind(this)}>Daily</a>
                <a>Core</a>
                <a>Short-term</a>
                <a>Long-term</a> */}
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
