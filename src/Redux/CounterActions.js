import {SENDUSERID, SENDUSERDATA} from "./ActionTypes"

export const sendUsersId = () => {
    return{
        type: SENDUSERID
    }
}

export const sendUsersData = () => {
    return{
        type: SENDUSERDATA
    }
}