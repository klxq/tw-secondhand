import { ProductState } from '../../definitions'
import { ProductActionType, ProductAction } from './actions'

const initialState: ProductState  = {
    available: [],
    bought: [],
    owned: [],
}

export function productReducer(state: ProductState = initialState, action: ProductAction): ProductState {
    switch (action.type) {
        case ProductActionType.AVAILABLE_SUCCESS:
            return {
                ...state,
                available: action.payload
            }
        default:
            return state
    }
}
