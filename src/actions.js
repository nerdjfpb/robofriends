import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
    } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})


export const requestRobots = (props) = (dispatch) => ({
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch(error => {
        return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
    }
})