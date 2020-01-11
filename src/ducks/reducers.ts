import { combineReducers } from 'redux';

import currency from './currency';

const rootReducer = combineReducers<any>({
    currency
});

export default rootReducer;
