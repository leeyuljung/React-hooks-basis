import React, { Component } from 'react';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() { 
    return ( 
      <div>This is News {this.props.match.params.id}. </div>
    );
  }
}
 
export { News };