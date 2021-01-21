import { INPUT_CHANGE } from '../actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

const reducer = ( state = defaultState, action ) => {
  if( action.type === INPUT_CHANGE ){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  } else {
    return state;
  }
}

export default reducer;