import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux'


function TodoList() {

  const todos = useSelector(state => state.todoState.todos);

    return (
        <div>
            {todos.map(item => {
                return(
                    <TodoItem key={item.id} text={item.text} isCompleted={item.completed}/>
                )
            })}
        </div>
    )
};

export default TodoList;