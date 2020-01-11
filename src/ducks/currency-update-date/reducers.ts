import { createReducer } from 'redux-create-reducer';
import produce from 'immer';
import { Action } from 'redux-actions';
import * as CurrencyTypes from './action-types';

import { CurrenciesListInterface } from './interfaces';


const initialState: CurrenciesListInterface = {
    currencyList: [],
    baseCurrency: {},
    timeUpdateCurrency: ''
};

const rootReducer = createReducer<CurrenciesListInterface, any>(initialState, {
    [CurrencyTypes.GET_CURRENCIES_LIST]: (state: any, action: Action<any>): any =>
        produce(state, (draft: any) => {
            draft.currency = action.payload.currency;
        }),

    [CurrencyTypes.SET_BASE_CURRENCY]: (state: any, action: Action<any>): any =>
        produce(state, (draft: any) => {
            draft.baseCurrency = action.payload.baseCurrency;
        }),

    [CurrencyTypes.UPDATE_CURRENCIES_LIST]: (state: any, action: Action<any>): any =>
        produce(state, (draft: any) => {
            draft.timeUpdateCurrency = action.payload.timeUpdateCurrency;
            draft.currency = action.payload.currency;
        })
});

export default rootReducer;
