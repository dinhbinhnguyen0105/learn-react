
import TodoContext from './Context';

function TodoProvider({ children }) {

    return (
        <TodoContext>
            { children }
        </TodoContext>
    );
}

export default TodoProvider;