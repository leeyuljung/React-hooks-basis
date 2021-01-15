const defaultState = {
  inputValue: 'Write something...',
  list: [
    'react',
    'vue',
    'angular'
  ]
}

const reducer = ( state = defaultState, action ) => {
  if(action.type === 'changeInputValue'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  return state;
}

export default reducer;