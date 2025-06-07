import NewTask from './NewTask.jsx';
import { useState } from 'react';

export default function Task({ task = [], onAdd, onDelete }) {
  const [checkedTasks, setCheckedTasks] = useState([]);

  function handleCheckboxChange(taskId) {
    setCheckedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  }

  function handleClear(taskId) {
    if (checkedTasks.includes(taskId)) {
      onDelete(taskId); // Calls parent to delete the task
      setCheckedTasks(prev => prev.filter(id => id !== taskId));
    }
  }

  return (
    <section>
      <h2 className="text-2xl mb-4 font-bold text-stone-500">New Task</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />

      {task.length === 0 && (
        <p className="text-stone-800 my-4">There is nothing yet</p>
      )}

      {task.length > 0 && (
        <ul className="mt-8 space-y-4">
          {task.map((taskItem) => (
            <li
              key={taskItem.id}
              className="flex items-center justify-between p-3 bg-stone-200 rounded-md shadow"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={checkedTasks.includes(taskItem.id)}
                  onChange={() => handleCheckboxChange(taskItem.id)}
                />
                <span>{taskItem.text}</span>
              </div>
              <button
                className="text-stone-700 hover:text-red-400"
                onClick={() => handleClear(taskItem.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}