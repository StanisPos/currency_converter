import { createAction } from 'redux-actions';
import * as CurrencyTypes from './action-types';

export const getCurrenciesList = createAction(CurrencyTypes.GET_CURRENCIES_LIST);

export const updateCurrenciesList = createAction(CurrencyTypes.UPDATE_CURRENCIES_LIST);

export const setBaseCurrency = createAction(CurrencyTypes.SET_BASE_CURRENCY);
