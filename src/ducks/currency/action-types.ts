import { setActionPrefix } from '../action-helpers';

import { PREFIX_CURRENCY } from './constants';

export const GET_CURRENCIES_LIST = setActionPrefix('GET_CURRENCIES_LIST', PREFIX_CURRENCY);

export const UPDATE_CURRENCIES_LIST = setActionPrefix('UPDATE_CURRENCIES_LIST', PREFIX_CURRENCY);

export const SET_BASE_CURRENCY = setActionPrefix('SET_BASE_CURRENCY', PREFIX_CURRENCY);
