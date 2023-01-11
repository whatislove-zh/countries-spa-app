import { pullAll } from "lodash"
import { CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING } from "./details-actions"

const initialState = {
    currentCountry: null,
    status: "idle",
    error: null
}

export const detailsReduser = (state = initialState, {type, payload}) => {
     switch(type){
        case SET_LOADING:
            return {
                ...state,
                status: "loading",
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: "rejected",
                error: payload
            }
        case SET_COUNTRY:
            return {
                ...state,
                status: "received",
                currentCountry: payload,
            }
        case CLEAR_DETAILS:
            return initialState
        default:
            return state
     }
}