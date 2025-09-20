import { ADD_TASK, DELETE_TASK } from "./constans";

const initialState = {
    tasks: [1, 2, 3]
};

export function reducers(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task !== action.payload)
            };
        default:
            return state;
    }
}