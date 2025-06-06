import { useState } from "react";
export default function Task(onAdd, onDelete) {
    const [enteredTask, setEnteredTask] = useState();

    function handleTaskChange(event) {
        setEnteredTask(event.target.value);
    }
    function handleAddTask() {
        onAdd(enteredTask);
        setEnteredTask(""); // Clear the input after adding the task
    }
    return(
        <div className="flex">
            <input type="text" className="px-2 w-64 rounded-md bg-stone-300" onChange={handleTaskChange}/>
            <button className="ml-5 text-stone-400 hover:text-stone-600" onClick={handleAddTask}> Add Task</button>
        </div>
    )
}