import React, { Component } from 'react';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  // componentDidMount() {
  //   console.log(this.props.match);
  //   let tempId = this.props.match.params.id;
  //   this.setState({
  //     id: tempId
  //   });
  // }

  render() { 
    return ( 
      <div>This is News {this.props.match.params.id}. </div>
    );
  }
}
 
export { News };