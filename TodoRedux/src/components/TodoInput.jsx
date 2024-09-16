import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../redux/actions/todoActions";

function TodoInput() {

    const dispatch = useDispatch();

    const [todo, setTodo] = useState('')

    function addTodoToStore(){
        dispatch((addTodoActionCreator(todo)))
    }


    return (
        <div>
            <input type="text" onChange={event => setTodo(event.target.value)} value={todo}/>
            <button onClick={addTodoToStore}>Add Todo</button>
        </div>
    )
};

export default TodoInput;