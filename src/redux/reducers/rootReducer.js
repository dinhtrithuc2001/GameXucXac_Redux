import { combineReducers } from "redux";
import { createStore } from "redux";
import { GioHangReducer } from "./gioHangReducer";
import { ChiTietReducer } from "./chiTietReducer";
import { XucXacReducer } from "./XucXacReducer";

const rootReducer = combineReducers({
    GioHangReducer,
    ChiTietReducer,
    XucXacReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
