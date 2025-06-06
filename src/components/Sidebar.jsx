import Button from "./Button";

export default function Sidebar({onStartProject, projects, onSelectProject, selectedProjectId}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div className="mt-4">
            <Button onClick={onStartProject}>+ Add Projects</Button>
            </div>

            <ul className="mt-4">
                {projects.map((project) => {
                    let cssStyle = "w-full text-left px-4 py-2 rounded-md my-1  bg-stone-800 hover:bg-stone-700"
                    if(project.id === selectedProjectId) {
                        cssStyle += " text-stone-600 bg-stone-700"
                    }
                    else{
                        cssStyle += " text-stone-400"
                    }
                    return (
                        <li key={project.id} className={cssStyle}>
                            <button onClick={()=>onSelectProject(project.id)}
                                className="w-full h-full ">
                                {project.title}
                            </button>
                        </li>
                    )
    })}
            </ul>
        </aside>
    )
}