import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const store: any = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware()
    )
);

export default store;
