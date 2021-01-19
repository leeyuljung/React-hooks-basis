import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() { 
    return (
      <>
        <div>
          <input 
            type="text"
            placeholder="Write something..."
            value={ this.props.inputValue }
          />
          <button>Add</button>
        </div>
        <div>
          <ul>
            <li>React</li>
          </ul>
        </div>
      </>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    inputValue: state.inputValue
  }
}
 
export default connect(mapStateToProps, null)(TodoList);