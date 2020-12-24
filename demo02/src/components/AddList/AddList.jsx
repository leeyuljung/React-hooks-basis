import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddList extends Component {
  constructor(props){
    super(props);
    // 方法在這裡綁定會比在 render 中綁定，效能來得更好
    this.handleClick = this.handleClick.bind(this)
  }

  // 接收父組件傳遞的 deleteItem 方法
  handleClick(){
    this.props.deleteItem(this.props.index)
  }

  render() { 
    let content = this.props.content;
    let name = this.props.name;
    return ( 
      <li 
        onClick={this.handleClick} 
        dangerouslySetInnerHTML={{__html: name + content}} // 可解析 html 內容
      >
      </li>
    );
  }
}

// 父向子傳遞 props 時，要在子組件進行資料型別校驗
AddList.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
  name: PropTypes.string.isRequired // isRequired 代表必填
}

// 若父組件未向子組件傳遞 props 值時，可設定預設值
AddList.defaultProps = {
  name: 'YJ'
}


 
export { AddList };