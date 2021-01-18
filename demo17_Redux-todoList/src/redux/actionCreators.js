import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';

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