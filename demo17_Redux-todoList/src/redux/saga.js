import { takeEvery, put } from 'redux-saga/effects';
import { GET_TODOLIST } from './actionTypes';
import { getListAction } from './actionCreators';
import axios from 'axios';


function* mySaga(){
  yield takeEvery(GET_TODOLIST, getList);
}

function* getList(){
  const res = yield axios.get('https://easy-mock.bookset.io/mock/5fe55d3d3fcf242479a576a3/react-demo/addList');
  const action = getListAction(res.data);
  yield put(action);
}

export default mySaga;