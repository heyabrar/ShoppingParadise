import { combineReducers, legacy_createStore } from "redux";
import MyReducer from "./AppReducer/AKReducer";

const MainReducer = combineReducers({MyReducer})
export const MainStore = legacy_createStore(MainReducer);