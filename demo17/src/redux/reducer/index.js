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
    // newState.list.push(newState.inputValue);
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = '';
    return newState;
  } else {
    return state;
  }
}

export default reducer;