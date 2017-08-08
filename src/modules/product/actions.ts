import { Action, MiddlewareAPI } from 'redux'
import { ActionsObservable, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { Product, RootState } from '../../definitions'
import { available, purchase } from '../../apis/product'

export const enum ProductActionType {
    AVAILABLE_START = 'FETCH_AVAILABLE_PRODUCTS_START',
    AVAILABLE_SUCCESS = 'FETCH_AVAILABLE_PRODUCTS_SUCCESS',
    AVAILABLE_FAIL = 'FETCH_AVAILABLE_PRODUCTS_FAIL',
    PURCHASE_START = 'PURCHASE_PRODUCT_START',
    PURCHASE_SUCCESS = 'PURCHASE_PRODUCT_SUCCESS',
    PURCHASE_FAIL = 'PURCHASE_PRODUCT_FAIL',
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

export interface PurchaseStartAction extends Action {
    type: ProductActionType.PURCHASE_START
    payload: string
}

export interface PurchaseSuccessAction extends Action {
    type: ProductActionType.PURCHASE_SUCCESS
}

export interface PurchaseFailAction extends Action {
    type: ProductActionType.PURCHASE_FAIL
}

export type ProductAction =
    AvailableStartAction |
    AvailableSuccessAction |
    AvailableFailAction |
    PurchaseStartAction |
    PurchaseSuccessAction |
    PurchaseFailAction

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

export function purchaseStart(id: string): PurchaseStartAction {
    return {
        type: ProductActionType.PURCHASE_START,
        payload: id,
    }
}

export function purchaseSuccess(): PurchaseSuccessAction {
    return {
        type: ProductActionType.PURCHASE_SUCCESS,
    }
}

export function purchaseFail(): PurchaseFailAction {
    return {
        type: ProductActionType.PURCHASE_FAIL,
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

export function purchaseEpic(
    action$: ActionsObservable<PurchaseStartAction>,
    store: MiddlewareAPI<RootState>,
): Observable<PurchaseSuccessAction | PurchaseFailAction> {
    const token = store.getState().user.sessionToken!
    return action$.ofType(ProductActionType.PURCHASE_START)
        .mergeMap((action) => Observable.from(purchase(action.payload, token)))
        .map(purchaseSuccess)
        .catch(() => Observable.of(purchaseFail()))
}

export function reloadAvailableEpic(
    action$: ActionsObservable<PurchaseSuccessAction>,
): Observable<AvailableStartAction> {
    return action$.ofType(ProductActionType.PURCHASE_SUCCESS)
        .map(availableStart)
}

export const productEpics: Epic<Action, RootState>[] = [
    availableEpic,
    purchaseEpic,
    reloadAvailableEpic,
]
