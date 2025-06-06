export default function SelectedProject({ project, onDelete }) {
    const date = new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric", });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-400">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-stone-500">{project.title}</h1>
                   <button className="px-xl text-stone-500 hover:text-stone-950" onClick={onDelete}>DELETE</button>
                </div>
                <p className="mb-4 text-stone-400">{date}</p>
                <p className=" text-stone-600 whitespace-pre-wrap">{project.description}</p>
                
            </header>
            <div className="mt-8">
                <h2 className="text-xl font-bold text-stone-500">Tasks</h2>
            </div>
        </div>
    )
}