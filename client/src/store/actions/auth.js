import axios from 'axios';

import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_FAIL
} from './types';
import setAuthToken from './../../utils/setAuthToken';

//Load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/users/me');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        });
        console.error('Something goes wrong!');
    }
};

//Register user
export const registerUser = (
    firstName,
    lastName,
    email,
    password
) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ firstName, lastName, password, email });

    try {
        const res = await axios.post('/users/create', body, config);
        console.log(res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

//Login User
export const loginUser = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/users/login', body, config);
        console.log(res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
        console.log(err);
    }
};
