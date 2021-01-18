import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = ( props ) => {
  return (
    <>
      <div style={{ width: '300px', margin: '1rem auto' }}>
        <Input 
          placeholder= "Write something..." 
          style={{width: '68%', marginRight: '2%'}} 
          onChange={ props.changeInputValue }
          value={ props.inputValue }
        />
        <Button 
          type="primary" 
          style={{width: '30%'}} 
          onClick={ props.clickBtn }
        >
          Add
        </Button>
      </div>
      <div style={{width: '300px', margin: '1rem auto'}}>
        <List 
          bordered
          dataSource={ props.list }
          renderItem={(item, index) => 
            <List.Item 
              onClick={ () => { props.deleteItem(index)} }
            >
              { item }
            </List.Item>}
        />
      </div>
    </>
  )
}
 
export default TodoListUI;