import { useRef, useReducer } from 'react';

// Init state
const initState = { job: '', jobs: []};
// Init action
const SET_JOB = 'set_job';
const CREATE_JOB = 'create_job';
const DELETE_JOB = 'delete_job'; 

const setJob = payload => ({ type: SET_JOB, payload});
const createJob = payload => ({ type: CREATE_JOB, payload});
const deleteJob = payload => ({ type: DELETE_JOB, payload});
// reducer
const reducer = (state, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job : action.payload
            };
        case CREATE_JOB:
            return {
                ...state,
                jobs : [...state.jobs, state.job]
            };
        case DELETE_JOB:
            return {
                ...state,
                jobs : state.jobs.filter((job, index) => index !== action.payload),
                // jobs : state.jobs.splice(1), ???
            };
        default:
            throw new Error('Invalid action');
    }
}

function Todo() {
    const [state, dispath] = useReducer(reducer, initState);
    console.log(state);
    const addInputRef = useRef();
    return (
        <div className="todo-container">
            <div className='todo-header'>
                <h1>Todo App</h1>
            </div>
            <div className='todo-add'>
                <input
                    value={state.job}
                    placeholder='Type todo'
                    onChange={e => dispath(setJob(e.target.value))}
                    ref={addInputRef}
                />
                <button
                    onClick={() => {
                        dispath(createJob());
                        dispath(setJob(''));
                        addInputRef.current.focus();
                    }}
                >Add</button>
            </div>
            <div className='todo-items'>
                {
                    state.jobs.map((job, jobIndex) => {
                        return (
                            <div className='item' key={jobIndex}>
                                <li>
                                    {job}
                                    <span
                                        className='item__delete-btn'
                                        onClick={()=>dispath(deleteJob(jobIndex))}
                                    >&times;</span>
                                </li>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Todo;