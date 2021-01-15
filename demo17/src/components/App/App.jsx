import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
  'react',
  'vue',
  'angular'
]

class App extends Component {
  render() { 
    return (  
      <>
        <div style={{width: '300px', margin: '1rem auto'}}>
          <Input placeholder="Write something..." style={{width: '68%', marginRight: '2%'}} />
          <Button type="primary" style={{width: '30%'}} >Add</Button>
        </div>
        <div style={{width: '300px', margin: '1rem auto'}}>
          <List 
            bordered
            dataSource={ data }
            renderItem={item => <List.Item>{ item }</List.Item>}
          />
        </div>
      </>
    );
  }
}
 
export default App;