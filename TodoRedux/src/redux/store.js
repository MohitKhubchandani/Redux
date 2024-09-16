import todoReducer from "../../../REDUXCORETODO/todoReducer";
import {combineReducers, createStore} from 'redux';
import userReducer from "../../../REDUXCORETODO/userReducer";

const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer 

})
const store = createStore(rootReducer);

export default store;
