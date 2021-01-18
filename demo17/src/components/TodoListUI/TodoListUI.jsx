import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() { 
    return (  
      <>
        <div style={{ width: '300px', margin: '1rem auto' }}>
          <Input 
            placeholder= "Write something..." 
            style={{width: '68%', marginRight: '2%'}} 
            onChange={ this.props.changeInputValue }
            value={ this.props.inputValue }
          />
          <Button 
            type="primary" 
            style={{width: '30%'}} 
            onClick={ this.props.clickBtn }
          >
            Add
          </Button>
        </div>
        <div style={{width: '300px', margin: '1rem auto'}}>
          <List 
            bordered
            dataSource={ this.props.list }
            renderItem={(item, index) => <List.Item onClick={ () => { this.props.deleteItem(index)} }>{ item }</List.Item>}
          />
        </div>
      </>
    );
  }
}
 
export default TodoListUI;