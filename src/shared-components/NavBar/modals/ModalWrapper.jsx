import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = (props) => {
    const {children, isOpen, onCloseClick} = props;
    const backgroundDivRef = useRef();

    if(!isOpen) {
        return null;
    }

    return (
        <RemoveScroll>
            <div 
            ref = {backgroundDivRef}
            className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato items-start z-20"
            onClick={(e) => {
                if(e.target === backgroundDivRef.current) {
                    onCloseClick();
                }
            }}>
                <button className='absolute top-0 right-0 p-2' onClick={onCloseClick}>
                    <i className='fa-regular fa-circle-xmark text-4xl text-emerald-400'></i>
                </button>
                {children}
            </div>
        </RemoveScroll>
    )
}

export default ModalWrapper;