import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR
} from './../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}
