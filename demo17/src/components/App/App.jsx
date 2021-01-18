import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../../redux/store';
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from '../../redux/actionTypes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(e){
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action);
  }

  clickBtn(){
    const action = {
      type: ADD_ITEM
    }
    store.dispatch(action);
  }

  deleteItem(index){
    const action = {
      type: DELETE_ITEM,
      index
    }
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState());
  }

  render() { 
    return (  
      <>
        <div style={{ width: '300px', margin: '1rem auto' }}>
          <Input 
            placeholder= "Write something..." 
            style={{width: '68%', marginRight: '2%'}} 
            onChange={ this.changeInputValue }
            value={ this.state.inputValue }
          />
          <Button 
            type="primary" 
            style={{width: '30%'}} 
            onClick={ this.clickBtn }
          >
            Add
          </Button>
        </div>
        <div style={{width: '300px', margin: '1rem auto'}}>
          <List 
            bordered
            dataSource={ this.state.list }
            renderItem={(item, index) => <List.Item onClick={ this.deleteItem.bind(this, index) }>{ item }</List.Item>}
          />
        </div>
      </>
    );
  }
}
 
export default App;