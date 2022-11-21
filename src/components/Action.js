import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Modal from './Modal'
import Message from '../pages/Message'
import { useState } from 'react'
import { ModalContext } from './ModalContext'
import { MessageContext } from '../context/MessageContext'
function Action(props) {
    const [openModal, setOpenModal] = useState(false)
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    return (
        <MessageContext.Provider value={[success, setSuccess, message, setMessage, showMessage, setShowMessage]}>
                {/* icon */}
                <div className="Action" onClick={() => setOpenModal(true)}>
                    <img className='action-img' src={props.imageLink} alt="" />
                    <p className='action-name'>{props.name}</p>
                </div>

                {/* popup screen */}
                <Modal
                    child={props.modalPage}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />

                {/* popup status message */}
                <Modal 
                    child={
                        <Message 
                            success={success}
                            message={message}
                        />
                    }
                    openModal={showMessage}
                    setOpenModal={setShowMessage}
                />
    
        </MessageContext.Provider>



    )
}

export default Action