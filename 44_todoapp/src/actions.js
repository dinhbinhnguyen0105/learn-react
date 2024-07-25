import { SET_ACTION, CREATE_ACTION, DELETE_ACTION } from './constants'

export function setJob(payload) {
    return {
        type: SET_ACTION,
        payload
    };
}
export function createJob(payload) {
    return {
        type: CREATE_ACTION,
        payload
    };
}
export function deleteJob(payload) {
    return {
        type: DELETE_ACTION,
        payload
    };
}

