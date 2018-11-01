import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      user: 'Kyle'
    }

    //bind functions


  }



  render() {

    return (
      <div>
        Hello, {this.state.user}!  Welcome to your new App!
      </div>
    )
  }

}

export default App;