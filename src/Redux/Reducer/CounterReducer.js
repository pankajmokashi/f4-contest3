import {sendUsersId, sendUsersData} from "./../Actions/CounterActions"

let initialState = ""

function counterReducer(state = initialState, action){
    switch(action.type){
        case "SENDUSERID":
            return state;
        case "SENDUSERDATA":
            return state;
        default:
            return state;
    }
}

export default counterReducer;