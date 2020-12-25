import React, { Component } from 'react';

class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: true,
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(){
    this.setState({
      isShow: this.state.isShow? false : true
    })
  }

  render() { 
    return ( 
      <div>
        <div className={this.state.isShow? 'show' : 'hide'}>Secret</div>
        <button onClick={this.toggleDisplay}>Toggle</button>
      </div>
    );
  }
}
 
export { Secret };