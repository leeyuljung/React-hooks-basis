import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputAction = ( value ) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = ( index ) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = ( data ) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.bookset.io/mock/5fe55d3d3fcf242479a576a3/react-demo/addList').then((res) => {
      const data = res.data;
      const action = getListAction(data);
      dispatch(action);
    })
  }
}
