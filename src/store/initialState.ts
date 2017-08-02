import { RootState } from '../definitions'

export const initialState: RootState = {
    app: {
        loading: true,
        logined: false,
    },
    user: null,
    product: {
        available: [],
        bought: [],
        owned: [],
    },
    router: null!,
}
