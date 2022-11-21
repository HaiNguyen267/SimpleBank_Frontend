import { ModalContext } from '../components/ModalContext';
import { UserContext } from '../components/UserContext';
import { useState, useContext } from 'react';
import { MessageContext } from '../context/MessageContext';
import axios from 'axios';

export default function WithdrawPage() {
    const [openModal, setOpenModal] = useContext(ModalContext)
    const [user, setUser, jwtToken, setJwtToken] = useContext(UserContext)
    const [success, setSuccess, message, setMessage, showMessage, setShowMessage] = useContext(MessageContext)
    const [amount, setAmount] = useState(0)
    const BACKEND_URL = 'http://localhost:8080'

    const hanleClick = async () => {
        const data = {
            amount: amount
        }

        const options = {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
            }
        }

        const respose = await axios.post(`${BACKEND_URL}/withdraw`, data, options)

        setSuccess(respose.data.success)
        setMessage(respose.data.message)
        setShowMessage(true) // show popup status message


        if (respose.data.success) {
            // display the message for 500ms before re-render the whole app
            setTimeout(() => {
                setUser({
                    ...user,
                    balance: respose.data.balance
                })
            }, 500)
        }

        setOpenModal(false)
    }
    return (
        <div className="WithdrawPage form" onKeyPress={(e) => {
            if (e.key === "Enter") {
                setOpenModal(false)
                hanleClick()
            }
        }}>
            <p className='page-name'>Withdraw Money</p>

            <input
                className="form-item"
                type="number"
                min={0}
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="ok-btn" onClick={hanleClick}>Ok</button>
        </div>
    )
}