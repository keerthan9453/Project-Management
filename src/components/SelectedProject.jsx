import Task from "./Task";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, task }) {
  if (!project) {
    return <p className="text-stone-500">No project selected.</p>;
  }

  const date = project.dueDate
    ? new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No due date";

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-400">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-500">{project.title}</h1>
          <button
            className="px-xl text-stone-500 hover:text-stone-950"
            onClick={() => onDelete(project.id)}
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} task={task} />
    </div>
  );
}