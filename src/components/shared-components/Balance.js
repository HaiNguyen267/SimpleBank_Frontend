
function Balance(props) {

    const formatBalance = (balanceString) => {
    
        let reversed = ''
        let count = 0
    
        for (let i = balanceString.length - 1; i >= 0; i--) {
            if (count % 3 === 0 && count > 0) {
                reversed += '.'
            }
            count++;
            reversed += balanceString[i]        
        }

        let formatted = ''
        for (let i = reversed.length - 1; i >= 0; i--) {
            formatted += reversed[i]
        }
        return formatted
    }

    const formattedBalance = formatBalance(props.amount.toString())
    
    return (
        <div className="Balance">
            <p className="balance-number">Your balance:</p>
            <img className='coin-icon' src="https://cdn-icons-png.flaticon.com/512/217/217853.png" alt="" />
            <p className='balance-number'>{formattedBalance}</p>
        </div>
    )
}

export default Balance