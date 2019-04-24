import React from 'react';
import './App.css';
import Output from './Output';
import Input from './Input';
import restaurants from './restaurants';

const restArray = Object.keys(restaurants);
console.log(restArray);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      restType: [...restArray]
    }
    console.log(this.state.restType);
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
          {this.state.restType.map((name ,i) => (<li key={i}>{name}</li>))}
        </ul>
          <Input 
            handleInput={this._updateInputText}
          />
         <Output />
        </header>
      </div>
    );
  }

  _updateInputText = (e) => {
    console.log(e.target.value);
    this.setState({
      inputText: e.target.value
    })
  }
}


export default App;
