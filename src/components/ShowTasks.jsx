import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../redux/constans";
import styles from "./styles.module.css";

export default function ShowTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [sortDone, setSortDone] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: ADD_TASK, payload: newTask.trim() });
      setNewTask("");
    }
  };

  const filteredTasks = tasks
    .filter((t) => t.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (!sortDone) return 0;
      return a.done === b.done ? 0 : a.done ? 1 : -1;
    });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Task List</h2>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="New Task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.button}>
          Add
        </button>
      </div>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
        <button
          onClick={() => setSortDone(!sortDone)}
          className={styles.button}
        >
          {sortDone ? "Normal order" : "Done last"}
        </button>
      </div>

      <ul className={styles.list}>
        {filteredTasks.map((t, index) => (
          <li key={index} className={styles.listItem}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() =>
                  dispatch({ type: TOGGLE_TASK, payload: index })
                }
              />
              <span
                className={`${styles.taskText} ${
                  t.done ? styles.done : ""
                }`}
              >
                {t.text}
              </span>
            </label>
            <button
              onClick={() => dispatch({ type: DELETE_TASK, payload: index })}
              className={styles.deleteBtn}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}