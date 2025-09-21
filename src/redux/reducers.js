import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./constans";

const initialState = {
  tasks: []
};

export function reducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, done: false }]
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t, i) => i !== action.payload)
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t, i) =>
          i === action.payload ? { ...t, done: !t.done } : t
        )
      };

    default:
      return state;
  }
}