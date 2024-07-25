import { useReducer, useRef } from 'react';
import { setJob, createJob, deleteJob } from './actions';
import reducer, { initState } from './reducer';
import logger from './logger';

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const todoInputRef = useRef();

  const handleChangeInput = (e) => {
    dispatch(setJob(e.target.value));
  }

  const handleAddBtnClicked = () => {
    dispatch(createJob(state.job));
    state.job = '';
    todoInputRef.current.focus();
  }
  const handleDeleteBtnClicked = (jobIndex) => {
    dispatch(deleteJob(jobIndex));
  }

  return (
    <div className="container">
        <div className='input-container'>
          <input
          ref={todoInputRef}
            value={state.job}
            onChange={handleChangeInput}
            placeholder='Type something ...'
          />
          <button
            onClick={handleAddBtnClicked}
          >ADD</button>
        </div>
        <div className='list-todo-container'>
          {
            state.jobs.map((job, jobIndex) => {
              return (
                <li className='list-todo__item' key={jobIndex}>
                  {jobIndex}. {job}
                <span className='list-todo__item__delete-btn' onClick={() => handleDeleteBtnClicked(jobIndex)}>&times;</span>
                </li>
              );
            })
          }
        </div>
    </div>
  );
}

export default App;
