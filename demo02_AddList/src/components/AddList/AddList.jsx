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

  // 為解決性能問題，當父組件產生變化時，子組件不需要一直重新 render
  shouldComponentUpdate(nextProps, nextState){
    // 當子組件更新後的 props 和原先的不一樣時，再去渲染就好
    if(nextProps.content !== this.props.content){
      return true;
    } else {
      return false;
    }
  }

  UNSAFE_componentWillReceiveProps(){
    console.log('Updation---componentWillReceiveProps---子組件接收到父組件傳遞來的參數');
  }

  componentWillUnmount(){
    console.log('UnMounting---componentWillUnmount---組件被刪除的時候');
  }

  render() { 
    console.log('child rendering');
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


 
export default AddList;