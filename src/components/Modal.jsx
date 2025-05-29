import { createPortal } from "react-dom"
import { forwardRef,useImperativeHandle, useRef} from "react"
import Button from "./Button";
const Modal = forwardRef(function Modal({ children,Caption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open(){
            dialog.current.showModal();
        }
    }));
    return createPortal(
        <dialog ref={dialog} className="w-[35rem] backdrop:bg-stone-900/90  p-4 shadow-md rounded-md">
            {children}
            <form method="dialog">
                <Button className="absolute rounded-md top-2 right-2 text-stone-400 hover:text-stone-600">
                {Caption}
            </Button>
            </form>
        </dialog>,document.getElementById("modal-root")
    )
})
export default Modal;
