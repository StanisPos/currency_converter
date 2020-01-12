import { all } from 'redux-saga/effects';
import { processSagas } from '../../helpers/sagas-helpers';
import { GET_CURRENCIES_LIST, SET_BASE_CURRENCY, UPDATE_CURRENCIES_LIST } from './action-types';

const sagas = {
    * [GET_CURRENCIES_LIST](action: any) {
        console.log(action);
        return yield 1;
    },

    * [UPDATE_CURRENCIES_LIST](action: any) {
        console.log(action);
        return yield 2;
    },

    * [SET_BASE_CURRENCY](action: any) {
        console.log(action);
        return yield 2;
    }
};

export default function* () {
    yield all([...processSagas(sagas)]);
}
