import { createStore } from "redux";
import { reducers } from "./reducers";

// Загружаем задачи из localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (!serializedState) return undefined;
    return { tasks: JSON.parse(serializedState) };
  } catch (e) {
    console.warn("Cannot load tasks from localStorage", e);
    return undefined;
  }
}

// Сохраняем задачи в localStorage
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Cannot save tasks to localStorage", e);
  }
}

const persistedState = loadFromLocalStorage();

export const store = createStore(reducers, persistedState);

// Подписка на изменения store, чтобы сохранять задачи
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});