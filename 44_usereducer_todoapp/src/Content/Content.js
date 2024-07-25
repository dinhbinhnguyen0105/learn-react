import { useReducer } from 'react';

// init states
const initState = { todoValue: '', todos: [] };

// actions
const SET = 'set';
const CREATE = 'create';
const REMOVE = 'remove';

function setTodo(payload) {
    return { type: SET, payload };
}
function createTodo() {
    return { type: CREATE};
}
function removeTodo(payload) {
    return { type: REMOVE, payload };
}

// reducers
function reducers(state, action) {
    // state = {
    //     todoValue : '',
    //     todos: [],
    // }
    switch (action.type) {
        case SET: 
            return { ...state, todoValue: action.payload };
        case CREATE:
            return { ...state, todos: [...state.todos, state.todoValue] };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => {
                    return index !== action.payload;
                })
            };

        default: throw new Error('Invalid action');
    }
}

function Content() {
    const [state, dispath] = useReducer(reducers, initState);
    const handleSetTodoValue = e => dispath(setTodo(e.target.value));
    const handleAddTodo = () => dispath(createTodo());
    const handleRemoveTodo = (index) => {
        dispath(removeTodo(index));
    };

    console.log(state);

    return (
        <div className='content'>
            <div className='input-box'>
            <input
                id='input-todo'
                placeholder='Enter todo ...'
                value={state.todoValue}
                onChange={handleSetTodoValue}
            />
            <button
                onClick={handleAddTodo}
            >
                Add
            </button>
            </div>
            <div className='todo-list'>
                {
                    state.todos.map((todo, todoIndex) => {
                        return (
                            <li 
                                key={todoIndex}
                            >
                                {todo}
                                <span
                                    onClick={() => handleRemoveTodo(todoIndex)}
                                    style={{
                                        paddingLeft: 20
                                    }}
                                >
                                    &times;
                                </span>
                            </li>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Content;