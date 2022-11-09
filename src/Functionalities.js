import Functionality from './Functionality';

function Functionalities() {

    return (
        <div className='Functionalities'>
            <Functionality 
                image="https://static.thenounproject.com/png/683444-200.png"
                name="Deposit"
            />
            <Functionality 
                image="https://cdn-icons-png.flaticon.com/512/1682/1682308.png"
                name="Withdraw"
            />
            <Functionality 
                image="https://static.thenounproject.com/png/407799-200.png"
                name="Transfer"
            />
        </div>
    )
}

export default Functionalities