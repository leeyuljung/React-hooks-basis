import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList.jsx';
import { Provider } from 'react-redux';
import store from '../../redux/store';

class App extends Component {
  render() { 
    return (  
      <Provider store={ store }>
        <TodoList />
      </Provider>
    );
  }
}
 
export default App;