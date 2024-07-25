 import { SET_ACTION, CREATE_ACTION, DELETE_ACTION } from './constants';

export const initState = { job: '', jobs : [] };

export default function reducer (state, action) {
    switch(action.type) {
        case SET_ACTION:
            return {
                ...state,
                job: action.payload,
            };
        case CREATE_ACTION:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
        case DELETE_ACTION:
            console.log(state.jobs);
            return {
                ...state,
                jobs: state.jobs.filter((job, index) => index !== action.payload),
            };
        default:
            throw new Error('Invalid action');
    }
}