import ReactDOM from 'react-dom';
import { ModalContext } from './ModalContext';
import { useContext } from 'react';
export default function Modal({child, openModal, setOpenModal}) {
    
    if (!openModal) return null

    return ReactDOM.createPortal(
        <ModalContext.Provider value={[openModal, setOpenModal]}>
            <div className='overlay' onClick={() => setOpenModal(false)}></div>
            <div className='modal'>
                <button className='close-btn' onClick={() => setOpenModal(false)}>
                    X
                </button>
                
                {child}
            </div> 
        </ModalContext.Provider>,
        document.getElementById("portal")
    )

}