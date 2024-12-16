import React, { Component } from 'react';
import Display from './Display';
import Display2 from './Display2';


export default class App extends Component {
    state={
        name : "Revanth",
        Age :23,
    }
  render() {
    return (
      <div>
        <center>
            <h1>This is revanth</h1>
           <h1><Display this is my name={this.state.Age} /></h1>
           <h1><Display2 This is my name={this.state.name} /></h1>
        </center>
      </div>
    );
  }
}
