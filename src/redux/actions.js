import { ADD_TASK, DELETE_TASK } from "./constans"

export function addTaskFunc(payload){
    return {type: ADD_TASK, payload}
}
export function delteTaskFunc(payload){
    return {type: DELETE_TASK, payload}
}