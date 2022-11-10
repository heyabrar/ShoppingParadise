import { combineReducers, legacy_createStore } from "redux";
import SkinDotKeyReducer  from "./SkinPageReducer/SkinPageReducer";

const MainReducer = combineReducers({SkinDotKeyReducer})
export const MainStore = legacy_createStore(MainReducer);