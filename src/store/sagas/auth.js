import { delay }from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import * as actions from '../actions/index'

export function* logoutSaga(action) {

    yield call([localStorage, 'removeItem'], 'token')
    yield call([localStorage, 'removeItem'], 'expirationDate')
    yield call([localStorage, 'removeItem'], 'userId')

    // yield localStorage.removeItem('token')
    // yield localStorage.removeItem('expirationDate')
    // yield localStorage.removeItem('userId')
    
    yield put(actions.logoutSucceed())

}

export function* checkAuthTimeoutSaga(action) {

    yield delay(action.expirationTime * 1000)
    yield put(actions.logout())
}

export function* authUserSaga(action) {
    
    yield put(actions.authStart())
        const authData = {
            email: action.email,
            password: action.password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDO6LoUH3pIVLv-ju7k3Psll_PjIOL1xIg'
        if (!action.isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDO6LoUH3pIVLv-ju7k3Psll_PjIOL1xIg'
        }
        try {
        const response = yield axios.post(url, authData)
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000)
        yield localStorage.setItem('token', response.data.idToken)
        yield localStorage.setItem('expirationDate', expirationDate)
        yield localStorage.setItem('userId', response.data.localId)
        yield put(actions.authSuccess(response.data.idToken, response.data.localId))
        yield put(action.checkAuthTimeout(response.data.expiresIn))
        } catch (error) {
            yield put(actions.authFail(error.response.data.error))
        }
}

export function* authCheckStateSaga(action) {

    const token = localStorage.getItem('token')
    if (!token) {
        yield put(actions.logout())
    } else {
        const expirationDate = yield new Date(
            localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                yield put(actions.logout())
             } else {
                const userId = yield localStorage.getItem('userId')
                yield put(actions.authSuccess(token, userId))
                yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
             }
    }
}