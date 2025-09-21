import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./constans";

// Загружаем из localStorage
const saved = localStorage.getItem("tasks");
const initialState = {
  tasks: saved ? JSON.parse(saved) : []
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
        tasks: state.tasks.filter((t) => t.id !== action.payload)
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        )
      };
    default:
      return state;
  }
}