import { all, call } from 'redux-saga/effects';
import { categorySaga } from './categories/categories-saga';
import { userSagas } from './user/user-saga';

//ES6 generator fxn
export function* rootSaga() {
  yield all([call(categorySaga), call(userSagas)]);
}
