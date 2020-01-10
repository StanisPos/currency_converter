import { createReducer } from 'redux-create-reducer';
import produce from 'immer';
import { Action } from 'redux-actions';
import * as CurrencyTypes from './action-types';

import { CurrenciesListInterface } from './interfaces';


const initialState: CurrenciesListInterface = {
    currencyList: []
};

const rootReducer = createReducer<CurrenciesListInterface, any>(initialState, {
    [CurrencyTypes.GET_CURRENCIES_LIST]: (state: any, action: Action<any>): any =>
        produce(state, (draft: any) => {
            draft.currency = action.payload;
        }),

    [CurrencyTypes.SET_BASE_CURRENCY]: (state: any, action: Action<any>): any =>
        produce(state, (draft: any) => {
            draft.currencyList = action.payload;
        }),

    [CurrencyTypes.UPDATE_CURRENCIES_LIST]: (state: any, action: Action<any>): any =>
        produce(state, (draft: any) => {
            draft.currency = action.payload;
        })
});

export default rootReducer;
