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

  // 用 ref 來綁定
  // inputChange(){
  //   this.setState({
  //     inputValue: this.input.value
  //   })
  // }

  // 增加項目
  addItem(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    },() => {
      // setState 方法提供了一個回調函數，這樣才能獲取同步的資料
      console.log(this.ul.querySelectorAll('li').length);
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

  // componentWillMount 為即將過時的生命週期函數，在 17.x 版本中會完全棄用，現已更名為 UNSAFE_componentWillMount()
  UNSAFE_componentWillMount(){
    console.log('UNSAFE_componentWillMount---組件即將要掛載到頁面了');
  }

  componentDidMount(){
    console.log('componentDidMount---組件掛載完成了');
  }

  render(){
    console.log('render---組件掛載中');
    return(
      <Fragment>
        <div>
          <input 
            type="text" 
            value={this.state.inputValue} 
            onChange={this.inputChange}
            // ref={(input)=>{this.input = input}}
          />
          <button onClick={this.addItem}>Add Item</button>
        </div>
        <ul ref={(ul)=>{this.ul = ul}}>
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