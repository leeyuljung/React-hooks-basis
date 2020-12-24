import React, { Component, Fragment } from 'react';
import { AddList } from '../AddList';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: ['js', 'css']
    }
    this.inputChange = this.inputChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // 填寫項目
  inputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  // 增加項目
  addItem(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  // 刪除項目
  deleteItem(index){
   let newList = this.state.list;
   newList.splice(index, 1); 
   this.setState({
     list: newList
   })
  }

  render(){
    return(
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.inputChange}/>
          <button onClick={this.addItem}>Add Item</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return(
                <AddList 
                  key={index + item}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem}
                />
              ) 
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export { App }