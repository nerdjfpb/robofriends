import { CHANGE_SEARCHFIELD } from './constants';

const initialState ={
    searchfield: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCHFIELD:
            return Object.assign({},state, { searchfield: action.payload })
        default:
            return state;
    }
}