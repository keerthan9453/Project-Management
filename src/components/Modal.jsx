import { createPortal } from "react-dom"
export default function Modal({ children, onClose }) {
    return(
        <dialog>
            {children}
        </dialog>
    )
}