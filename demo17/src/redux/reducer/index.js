const defaultState = {
  inputValue: '',
  list: [
    'react',
    'vue',
    'angular'
  ]
}

const reducer = ( state = defaultState, action ) => {
  if( action.type === 'changeInputValue' ) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if ( action.type === 'addItem' ) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = '';
    return newState;
  } else if ( action.type === 'deleteItem' ) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  } else {
    return state;
  }
}

export default reducer;