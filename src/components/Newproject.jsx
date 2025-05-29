import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function Newproject({onAddProject}){

    const modalRef = useRef();

    const title = useRef();
    const description = useRef();
    const DueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = DueDate.current.value;

        //Validation ..
        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            modalRef.current.open();
            return;
        }
       
        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return(
        <>
            <Modal ref={modalRef} Caption="Close">
                <h2 className="text-lg font-bold text-stone-50">Please fill all the fields</h2>
                <p className="text-sm text-stone-300">All fields are required to create a new project.</p>
            </Modal>
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
        </>
    )
}