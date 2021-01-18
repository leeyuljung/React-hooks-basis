import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from '../actionTypes';

const defaultState = {
  inputValue: '',
  list: [
    'react',
    'vue',
    'angular'
  ]
}

const reducer = ( state = defaultState, action ) => {
  if( action.type === CHANGE_INPUT_VALUE ) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if ( action.type === ADD_ITEM ) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = '';
    return newState;
  } else if ( action.type === DELETE_ITEM ) {
    console.log(action.index);
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  } else {
    return state;
  }
}

export default reducer;