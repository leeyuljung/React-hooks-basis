import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

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
        {/* <div className={this.state.isShow? 'show' : 'hide'}>Secret</div> */}
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="secretText"
          unmountOnExit
        >
          <div>Secret</div>
        </CSSTransition>
        <button onClick={this.toggleDisplay}>Toggle</button>
      </div>
    );
  }
}
 
export default Secret;