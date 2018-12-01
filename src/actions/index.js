import types from './types';
import axios from 'axios';

export const getMovieQuote = () => async dispatch => {

    const axiosConfig = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    };

    const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

    dispatch({
        type: types.GET_QUOTE,
        quote: response.data.message
    });

};

export function userSignIn(user) {
    return async function(dispatch){
        try{
            const response = await axios.post('http://api.reactprototypes.com/signin', user);

            console.log('Sign In Response:', response);

            localStorage.setItem('token', response.data.token);

            dispatch({
                type: types.SIGN_IN
            });

        } catch(error){
            dispatch({
                type: types.SIGN_IN_ERROR,
                error: 'Invalid email and/or password'
            })
        }
    }
}

export function userSignOut() {

    localStorage.removeItem('token');

    return {
        type: types.SIGN_OUT
    }
}

export function userSignUp(user) {
    return async function (dispatch) {

        try {
            const response = await axios.post('http://api.reactprototypes.com/signup', user);

            localStorage.setItem('token', response.data.token);

            dispatch({
                type: types.SIGN_UP
            })

        } catch(error){
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Email is already in use'
            })
        }

    }
}



