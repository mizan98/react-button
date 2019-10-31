import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {number:0}
 
  increment = () =>{
    this.setState ({number: this.state.number+=1})
    console.log(this.state.number)
    return this.state.number
  }

  decrement = () => {
    this.setState ({number: this.state.number-=1})
    console.log(this.state.number)
    return this.state.number
  }

  render(){
    return(
      <div>
        <button onClick = {this.increment}>Increase</button>
        <button onClick = {this.decrement}>Decrease</button>
        <h1>{this.state.number}</h1>
      </div>
    )
  }
}

export default App;
