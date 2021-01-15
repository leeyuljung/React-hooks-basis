import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../../redux/store';

class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(e){
    const action = {
      type: 'changeInputValue',
      value: e.target.value
    }
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState());
  }

  render() { 
    return (  
      <>
        <div style={{width: '300px', margin: '1rem auto'}}>
          <Input 
            placeholder={ this.state.inputValue }  
            style={{width: '68%', marginRight: '2%'}} 
            onChange={ this.changeInputValue }
          />
          <Button type="primary" style={{width: '30%'}} >Add</Button>
        </div>
        <div style={{width: '300px', margin: '1rem auto'}}>
          <List 
            bordered
            dataSource={ this.state.list }
            renderItem={item => <List.Item>{ item }</List.Item>}
          />
        </div>
      </>
    );
  }
}
 
export default App;