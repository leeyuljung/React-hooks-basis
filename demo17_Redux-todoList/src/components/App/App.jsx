import React, { Component } from 'react';
import store from '../../redux/store';
import { changeInputAction, addItemAction, deleteItemAction } from '../../redux/actionCreators';
import TodoListUI from '../TodoListUI/TodoListUI.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(e){
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  clickBtn(){
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem(index){
    const action = deleteItemAction(index);
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState());
  }

  render() { 
    return (
      <TodoListUI 
        inputValue = { this.state.inputValue }
        list = { this.state.list }
        changeInputValue = { this.changeInputValue }
        clickBtn = { this.clickBtn }
        deleteItem = { this.deleteItem }
      />
    )
  }
}
 
export default App;