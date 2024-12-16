import { useState } from "react";
import Button from "./Button"

type ModalProps = {
    children: React.ReactNode
}

const Modal = ({ children } : ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [outOf, setOutOf] = useState(true)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    const handleClick = () => outOf && handleClose()

    return ( 
        <>
            <Button text="Open Modal" onClick={handleOpen} />

            {isOpen &&
                <div className="fixed w-full h-screen bg-black z-50 top-0 left-0 bg-opacity-10 backdrop-blur-sm flex justify-center items-center" onClick={handleClick}>
                    <div className="relative bg-white w-1/2 p-4" onMouseEnter={() => setOutOf(false)} onMouseLeave={() => setOutOf(true)}>
                        {children}

                        <button className="absolute top-4 right-4" onClick={handleClose}>Close</button>
                    </div>
                </div>
            }
        </>
     );
}
 
export default Modal;