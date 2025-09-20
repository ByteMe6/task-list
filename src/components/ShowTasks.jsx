import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, DELETE_TASK } from "../redux/constans";

export default function ShowTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: ADD_TASK, payload: newTask.trim() });
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t}</span>
            <button onClick={() => dispatch({ type: DELETE_TASK, payload: t })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}