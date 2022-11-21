import Action from './Action';
import DepositPage from '../pages/DepositPage';
import WithdrawPage from '../pages/WithdrawPage';
import TransferPage from '../pages/TransferPage';

function ActionList() {

    return (
        <div className='ActionList'>
            <p className='message'>Let's make a transaction!</p>
            <div className='action-container'>
                <Action
                    imageLink="https://static.thenounproject.com/png/683444-200.png"
                    name="Deposit"
                    modalPage={<DepositPage />}
                />

                <Action
                    imageLink="https://cdn-icons-png.flaticon.com/512/1682/1682308.png"
                    name="Withdraw"
                    modalPage={<WithdrawPage />}
                />

                <Action
                    imageLink="https://static.thenounproject.com/png/407799-200.png"
                    name="Transfer"
                    modalPage={<TransferPage />}
                />

            </div>
        </div>

    )
}

export default ActionList