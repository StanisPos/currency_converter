import { fork, all } from 'redux-saga/effects';

import sagasCurrency from './currency/sagas';

export default function* rootSaga() {
    yield all([
        fork(sagasCurrency)
    ]);
}
