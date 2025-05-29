import { useRef } from "react";
import Input from "./Input";
export default function Newproject({onAddProject}){
    const title = useRef();
    const description = useRef();
    const DueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = DueDate.current.value;

        //Validation ..
        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }
       
        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return(

        <div className="w-[35rem] mt-16">
            <menu className="flex gap-4 justify-end items-center my-4"> 
                <li>
                    <button 
                    className="px-9 bg-stone-800 text-stone-50 rounded-md hover:text-stone-300"
                    onClick={handleSave}
                    > Save </button>
                </li> 
                <li>
                    <button className="bg-stone-800 text-stone-50 rounded-md px-6 text hover:text-stone-300"> Cancel </button>
                </li>
            </menu>
            

            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea/>
                <Input type="date" ref={DueDate} label="Date" />
            </div>
        </div>
    )
}