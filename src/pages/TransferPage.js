
export default function TransferPage() {
    return (
        <div className="TransferPage form">
            <p className='page-name'>Transfer Money</p>
            <input
                className="form-item"
                type="text"
                placeholder="Enter account no"
            />
            <p className='form-item receiver-name'>Quan Do</p>
            <input
                className="form-item"
                type="text"
                placeholder="Enter amount"
            />
            <input
                className="form-item"
                type="text"
                placeholder="Enter message"
            />
            <button className="ok-btn">Ok</button>
        </div>
    )
}