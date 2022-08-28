import { combineReducers } from "redux";
import { TaskReducer } from "./reducer/TaskReducer";
import { CartReducer } from "./reducer/CartReducer";
import { AuthReducer } from "./reducer/AuthReducer";
const rootReducer=combineReducers({
    TaskReducer,
    AuthReducer,
    CartReducer
})

export default rootReducer;
