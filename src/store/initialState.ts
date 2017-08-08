import { RootState } from '../definitions'

export const initialState: RootState = {
    app: {
        loading: true,
        logined: false,
    },
    user: {
        username: null,
        sessionToken: null,
    },
    product: {
        available: [],
        bought: [],
        owned: [],
    },
    router: null!,
}
