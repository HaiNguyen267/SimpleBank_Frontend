
export default function DepositPage() {
    return (
        <div className="DepositPage form">
            <p className='page-name'>Deposit Money</p>
            <input 
                className="form-item" 
                type="text" 
                placeholder="Enter amount"
            />
            <button className="ok-btn">Ok</button>
        </div>
    )
}