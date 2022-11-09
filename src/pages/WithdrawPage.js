
export default function WithdrawPage() {
    return (
        <div className="WithdrawPage form">
            <p className='page-name'>Withdraw Money</p>

            <input 
                className="form-item" 
                type="text" 
                placeholder="Enter amount"
            />
            <button className="ok-btn">Ok</button>
        </div>
    )
}