import TransactionDetailPage from "./TransactionDetailPage"
import Modal from "../../shared-components/Modal"
import { useState } from 'react'
import "../style.css"

export default function Transaction(props) {
    const [openModal, setOpenModal] = useState(false)
    let transactionType = props.transactionType.toString()
    let transationTypeStyleName = "transaction-type-out"
    let toOrFrom = "To"

    if (transactionType === "IN" || transactionType === "DEPOSIT") {
        transationTypeStyleName = "transaction-type-in"
        toOrFrom = "From"
    }

    const shortDate = props.date.toString().slice(0, 5)
    const shortMessage = props.message.toString().length > 25 ? 
                            props.message.toString().slice(0, 25) + "..." : props.message.toString()

    const TransactionDetail = () => {
        return (
            <TransactionDetailPage 
                    transactionType={transactionType}
                    transationTypeStyleName={transationTypeStyleName}
                    amount={props.amount}
                    accountNo={props.accountNo}
                    accountName={props.accountName}
                    date={props.date}
                    message={props.message}
                />
        )
    }
    return (
        <>
            <div className='Transaction' onClick={() => setOpenModal(true)}>
                <p className='transaction-date'>{shortDate}</p>
                <p className={transationTypeStyleName}>{props.transactionType}</p>
                <p className={`transaction-amount`}><img className='coin-icon' src="https://cdn-icons-png.flaticon.com/512/217/217853.png" alt="" />{props.amount}</p>
                {
                    (transactionType === "IN" || transactionType === "OUT") &&
                    <p className='transaction-info'>{`${toOrFrom} ${props.accountNo}`}</p>
                }
                {/* <p className="transaction-accountName">{props.accountName}</p> */}
                <p className='transaction-message'>{shortMessage}</p>
            </div>
            <Modal
                child={<TransactionDetail />}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>



    )
}