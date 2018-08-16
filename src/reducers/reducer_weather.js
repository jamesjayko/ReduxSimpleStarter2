import { FETCH_WEATHER } from "../actions";

export default function (state = [], action) {
    // console.log('action recieved:', action.payload.data); // after redux-promise middleware

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); // concat will return a new instance of state, not change the original state if used state.push(action.payload.data)
            return [action.payload.data, ...state] // same at above. this is es6
            break;
    
        default:
            break;
    }
    return state;
}