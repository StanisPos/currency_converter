import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleWare();

const store: any = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;
