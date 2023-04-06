import {createStore, applyMiddleware} from 'redux';
import {BUY_CAKE, ADD_CAKE} from './constants';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
const initialstate = {
    noOfCakes: 0
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {...state, noOfCakes: state.noOfCakes - 1 };
            break;
        case ADD_CAKE:
            return {...state, noOfCakes: state.noOfCakes + 1 };
            break;
        default: return state;
            break;
    }
}

export const store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)));
