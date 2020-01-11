import { takeLatest } from 'redux-saga/effects';

const createdCallback = (saga: any, callback: any): Function => callback(saga);

export const processSagas = (
    sagas: { [index: string]: Function},
    callbacks: any = [],
    effect = takeLatest
): Array<any> =>
    Object.keys(sagas).map((actionName: string) =>
        effect(actionName, callbacks.reduce(createdCallback, sagas[actionName])));
