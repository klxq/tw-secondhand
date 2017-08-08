import * as Redux from 'redux'
import * as ReactRouter from 'react-router'

// This file holds our app typings

// BUSINESS LOGIC
export interface App {
    loading: boolean
    logined: boolean
}

export interface User {
    username: string
    password: string
}

export interface UserWithToken {
    sessionToken: string
    username: string
}

export interface CreatedUser {
    username: string
    objectId: string
}

export interface Product {
    name: string
    price: string
    img: string
    description: string
    owner: CreatedUser
    objectId: string
    createdAt: string
    updatedAt: string
}

// ACTION CREATORS

// ACTIONS
export interface GeneralAction extends Redux.Action {
    payload?: object
}

export interface UserAuthenticatingAction extends GeneralAction {
    payload: User
}

export interface UserAuthenticatedAction extends GeneralAction {
    payload: UserWithToken
}

// STATES
export type AppState = App
export interface UserState {
    username: string | null
    sessionToken: string | null
}

export interface ProductState {
    available: Product[]
    bought: Product[]
    owned: Product[]
}

export interface RootState {
    user: UserState
    app: AppState
    product: ProductState
    router: ReactRouter.RouteComponentProps<void>
}
