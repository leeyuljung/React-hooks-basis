import React, { Component, Fragment } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: ['js', 'css']
    }
  }

  inputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  addItem(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  render(){
    return(
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addItem.bind(this)}>Add Item</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index + item}>{item}</li> 
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export { App }