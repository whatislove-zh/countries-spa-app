
import { CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBOURS } from "./details-actions"

const initialState = {
    currentCountry: null,
    status: "idle",
    error: null,
    neighbours: []
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
        case SET_NEIGHBOURS:
            return {
                ...state,
                neighbours: payload
            }
        default:
            return state
     }
}