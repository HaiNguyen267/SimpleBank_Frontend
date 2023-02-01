import { ModalContext } from '../context/ModalContext';
import { UserContext } from '../context/UserContext'
import { useContext, useState } from 'react';
import axios from 'axios'
import { MessageContext } from '../context/MessageContext'
import './style.css'

export default function DepositPage() {
    const [openModal, setOpenModal] = useContext(ModalContext)
    const [user, setUser, jwtToken, setJwtToken] = useContext(UserContext)
    const [success, setSuccess, message, setMessage, showMessage, setShowMessage] = useContext(MessageContext)
    const [amount, setAmount] = useState(0)
    const BACKEND_URL = 'https://simplebankbackend-production-7596.up.railway.app'


    const handleClick = async () => {
        const data = {
            amount: amount
        }
        const options = {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            },
        }
        const response = await axios.post(`${BACKEND_URL}/deposit`,
            data,
            options
        )

        setSuccess(response.data.success)
        setMessage(response.data.message)
        setShowMessage(true) // show popup status message
        if (response.data.success) {

            // display the message for 500ms before re-render the whole app
            setTimeout(() => {
                setUser({
                    ...user,
                    balance: response.data.balance
                })
            }, 500)
        }

        setOpenModal(false)


    }

    return (
        <div className="DepositPage form" onKeyPress={(e) => {
            if (e.key === "Enter") {
                setOpenModal(false)
                handleClick()
            }
        }}>

            <p className='page-name'>Deposit Money</p>
            <input
                className="form-item"
                type="number"
                min={0}
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="ok-btn" onClick={handleClick}>Ok</button>

        </div>
    )
}