import { ModalContext } from '../context/ModalContext';
import { UserContext } from '../context/UserContext';
import { MessageContext } from '../context/MessageContext'
import { useState, useContext } from 'react';
import axios from 'axios';
import './style.css'

export default function TransferPage() {
    const [openModal, setOpenModal] = useContext(ModalContext)
    const [user, setUser, jwtToken, setJwtToken] = useContext(UserContext)
    const [success, setSuccess, message, setMessage, showMessage, setShowMessage] = useContext(MessageContext)


    // const TransferForm = () => {
    const [receiverAccountNo, setReceiverAccountNo] = useState('')
    const [receiverAccountName, setReceiverAccountName] = useState('Unknown')
    const [amount, setAmount] = useState(0)
    const [transactionMessage, setTransactionMessage] = useState('')
    const BACKEND_URL = 'https://simplebankbackend-production-7596.up.railway.app'

    const ReceiverNameElement = () => {
        if (receiverAccountNo.length < 10) return null

        let receiverNameStyle = receiverAccountName === "Unknown" ? 'receiver-name-wrong' : 'receiver-name-correct'
        return (
            <p className={`form-item ${receiverNameStyle}`}>{receiverAccountName}</p>
        )
    }
    const handleClick = async () => {
        const data = {
            receiverAccountNo: receiverAccountNo,
            amount: amount,
            message: transactionMessage
        }

        const options = {
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            }
        }

        const response = await axios.post(`${BACKEND_URL}/transfer`, data, options)

        setSuccess(response.data.success)
        setMessage(response.data.message)
        setShowMessage(true) // show popup status message

        console.log(response.data);
        if (response.data.success) {
            // display the message for 500ms before re-render the whole app
            setTimeout(() => {
                setUser({
                    ...user,
                    balance: response.data.balance
                })
            }, 700)
        }

        setOpenModal(false)
    }

    const handleOnChange = async (e) => {
        const userInput = e.target.value;
        setReceiverAccountNo(userInput)
        if (userInput > 10) { 

            const body = {
                accountNo: userInput,
            }

            const response = await axios.post(`${BACKEND_URL}/accountname`, body)

            if (response.data.success) {
                setReceiverAccountName(response.data.accountName)
            } else {
                setReceiverAccountName("Unknown")

            }
        }

    }
    return (
        <div className="TransferPage form" onKeyPress={(e) => {
            if (e.key === "Enter") {
                handleClick()
                setOpenModal(false)
            }
        }}>

            <p className='page-name'>Transfer Money</p>
            <input
                className="form-item"
                type="text"
                placeholder="Enter account no"
                onChange={handleOnChange}
                onPaste={handleOnChange}
                />

            <ReceiverNameElement />
            <input
                className="form-item"
                type="number"
                min={1}
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                className="form-item"
                type="text"
                placeholder="Enter message"
                onChange={(e) => setTransactionMessage(e.target.value)}
            />

            <button className='ok-btn' onClick={handleClick}>Ok</button>
        </div>

    )
    // }
    // return (
    //     <>
    //         <TransferForm />

    //     </>
    // )
}