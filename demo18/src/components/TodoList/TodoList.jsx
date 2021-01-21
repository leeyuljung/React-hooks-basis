import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChangeAction } from '../../redux/actionCreators';

class TodoList extends Component {
  render() { 
    return (
      <>
        <div>
          <input 
            type="text"
            placeholder="Write something..."
            value={ this.props.inputValue }
            onChange={ this.props.inputChange }
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

const stateToProps = ( state ) => {
  return {
    inputValue: state.inputValue
  }
}

const dispatchToProps = ( dispatch ) => {
  return {
    inputChange(e){
      const action = inputChangeAction(e.target.value);
      dispatch(action);
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);