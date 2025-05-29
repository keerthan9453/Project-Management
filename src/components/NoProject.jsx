import picture from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProject({onStartProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={picture}
            className="w-16 h-16 object-contain mx-auto"
            ></img>
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className="text-stone-400 mb-4" >
                Please select a project from the sidebar or create a new one. 
            </p>
            <Button onClick={onStartProject}> Create New Project</Button>
        </div>

    )
}