import "../style.css"

export default function TransactionDetailPage(props) {
    let senderOrRecipient = "Recipent"
    let transactionType = props.transactionType.toString()
    if (transactionType === "IN") {
        senderOrRecipient = "Sender"
    }
    return (
        <div className='TransactionDetailPage'>
            <p className="page-name">Transaction detail</p>
            <p className={props.transationTypeStyleName}>{props.transactionType}</p>
            <p className='normal-text'><span className='bold-text'>Date: </span>{props.date}</p>
            {
                (transactionType === "IN" || transactionType === "OUT") &&
                <p className='normal-text'><span className='bold-text'>{senderOrRecipient} account no: </span>{props.accountNo}</p> 
            }
            {
                (transactionType === "IN" || transactionType === "OUT") &&
                <p className='normal-text'><span className='bold-text'>{senderOrRecipient} name: </span>{props.accountName}</p> 
            }
            <p className='normal-text'><span className='bold-text'>Amount: </span>{props.amount}</p>
            <p className='normal-text'><span className='bold-text'>Message: </span>{props.message}</p>
        </div>
    )
}