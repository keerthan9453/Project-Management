import { createPortal } from "react-dom"
import { forwardRef,useImperativeHandle, useRef} from "react"
const Modal = forwardRef(function Modal({ children,Caption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open(){
            dialog.current.showModal();
        }
    }));
    return createPortal(
        <dialog ref={dialog} className="w-[35rem] backdrop-brightness-100  p-4 bg-stone-800 text-stone-50 rounded-md">
            {children}
            <form>
                <button className="absolute  top-2 right-2 text-stone-400 hover:text-stone-100">
                {Caption}
            </button>
            </form>
        </dialog>,document.getElementById("modal-root")
    )
})
export default Modal;
