import { combineReducers } from "redux";
import {themeReduser} from "../theme/theme-reduser"

export const rootReduser = combineReducers({
    theme: themeReduser,
})