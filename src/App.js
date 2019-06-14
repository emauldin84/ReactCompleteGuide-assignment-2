import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends Component {

  state = {
    inputLength: 0,
    inputValue: '',
  }

  fieldChangeHandler = (event) => {
    const pLength = event.target.value.length
    const pValue = event.target.value

    this.setState({
      inputLength: pLength,
      inputValue: pValue
    })
  }

  deleteCharHandler = (charIndex) => {
    const inputValue = this.state.inputValue.split('')
    console.log(inputValue)
    console.log(charIndex)
    inputValue.splice(charIndex, 1);
    console.log(inputValue)
    this.setState({
      inputValue: inputValue.join(''),
      inputLength: inputValue.length
    })
  }

  render () {

    let charItems = null
    if (this.state.inputValue.length > 0) {
      let chars = this.state.inputValue.split('')
      charItems = chars.map((char, index) => {
        return (
          <Char
            click={() => this.deleteCharHandler(index)}
            char={char}
            key={index}
          />
        )
      })
    }

    return (
      <div className="App">
        <input type='text' value={this.state.inputValue} onChange={this.fieldChangeHandler}/>
        <p>{this.state.inputLength}</p>
        <Validation inputLength={this.state.inputLength}/>
        {charItems}
      </div>
    );
  }

}

export default App;
