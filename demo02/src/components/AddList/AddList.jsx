import React, { Component } from 'react';

class AddList extends Component {
  constructor(props){
    super(props);
    // 方法在這裡綁定比在 render 中綁定，效能會比較好
    this.handleClick = this.handleClick.bind(this)
  }

  // 接收父組件傳遞的 deleteItem 方法
  handleClick(){
    this.props.deleteItem(this.props.index)
  }

  render() { 
    let content = this.props.content
    return ( 
      <li 
        onClick={this.handleClick} 
        dangerouslySetInnerHTML={{__html: content}} // 可解析 html 內容
      >
      </li>
    );
  }
}
 
export { AddList };