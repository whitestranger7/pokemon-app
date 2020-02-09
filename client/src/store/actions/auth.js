import { REGISTER_SUCCESS, LOGIN_SUCCESS } from './types';
import axios from 'axios';

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
        console.log(error);
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
        console.log(err);
    }
};
