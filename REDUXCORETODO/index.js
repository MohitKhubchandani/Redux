import store from './store.js';
import {addTodoActionCreator, addUserActionCreator, removeTodoActionCreator} from './actionCreator.js';
console.log(store.getState());
store.dispatch(addTodoActionCreator("Buy Milk"))
console.log(store.getState().todoState);
store.dispatch(addTodoActionCreator("Buy Eggs"))
console.log(store.getState().todoState);
store.dispatch(addUserActionCreator("Mohit khubchandani"))
console.log(store.getState().userState);
