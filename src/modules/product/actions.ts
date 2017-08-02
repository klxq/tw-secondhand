import { Action } from 'redux'
import { ActionsObservable, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { Product } from '../../definitions'
import { available } from '../../apis/product'

export const enum ProductActionType {
    AVAILABLE_START = 'FETCH_AVAILABLE_PRODUCTS_START',
    AVAILABLE_SUCCESS = 'FETCH_AVAILABLE_PRODUCTS_SUCCESS',
    AVAILABLE_FAIL = 'FETCH_AVAILABLE_PRODUCTS_FAIL',
}

export interface AvailableStartAction extends Action {
    type: ProductActionType.AVAILABLE_START
}

export interface AvailableSuccessAction extends Action {
    type: ProductActionType.AVAILABLE_SUCCESS
    payload: Product[]
}

export interface AvailableFailAction extends Action {
    type: ProductActionType.AVAILABLE_FAIL
}

export type ProductAction =
    AvailableStartAction |
    AvailableSuccessAction |
    AvailableFailAction

export function availableStart(): AvailableStartAction {
    return {
        type: ProductActionType.AVAILABLE_START,
    }
}

export function availableSuccess(products: Product[]): AvailableSuccessAction {
    return {
        type: ProductActionType.AVAILABLE_SUCCESS,
        payload: products,
    }
}

export function availableFail(): AvailableFailAction {
    return {
        type: ProductActionType.AVAILABLE_FAIL,
    }
}

export function availableEpic(
    action$: ActionsObservable<AvailableStartAction>,
): Observable<AvailableSuccessAction | AvailableFailAction> {
    return action$.ofType(ProductActionType.AVAILABLE_START)
        .mergeMap(() => Observable.from(available()))
        .map(availableSuccess)
        .catch(() => Observable.of(availableFail()))
}

export const productEpics: Epic<Action, void>[] = [
    availableEpic
]
