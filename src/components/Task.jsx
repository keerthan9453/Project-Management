import NewTask from './NewTask.jsx';
export default function Task({task, onAdd, onDelete }) {


    return (
        <section>
            <h2 className="text-2xl mb-4 font-bold text-stone-500">New Task</h2>
            <NewTask onAdd={onAdd} onDelete={onDelete}/>
            { task.length ===0 &&( <p className="text-stone-800 my-4">There is nothing yet</p>)}
            {task.length>0 && 
            <ul>
            {task.map((taskItem) => (
                <li key={taskItem.id} className="mb-2">
                    <span>
                        {task.text}
                    </span>
                    <button>Clear</button>
                </li>) )}   
            </ul>}
        </section>
    );
}