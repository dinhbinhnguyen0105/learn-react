import { useReducer } from "react";

// Init state
const initState = 0;
// Init Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'DOWN';
// Reducer
const reducer = (state, action) => {
    // switch(action) {
    //     case UP_ACTION:
    //         return state + 1;
    //     case DOWN_ACTION:
    //         return state - 1;
    //     default:
    //         throw new Error('Invalid action');
    // }

    if(action === UP_ACTION) return state + 1;
    else if(action === DOWN_ACTION) return state - 1;
    else throw new Error('Invalid action');
}

function UseReducerTur() {
    //dispatch
    const [count, dispath] = useReducer(reducer, initState);

    return (
        <div className="count-container">
            <h1>{count}</h1>
            <button onClick={() => dispath(UP_ACTION)}>UP</button>
            <button onClick={() => dispath(DOWN_ACTION)}>DOWN</button>
        </div>
    );
}

export default UseReducerTur;