import Balance from '../shared-components/Balance'
import "./style.css"

export default function UserInfo(props) {
    return (
        <div className="UserInfo">
            <img className='user-img' src={props.profileImage} alt="" />
            <p className='user-accountNo'>Account No: {props.accountNo} </p>
            <p className='user-name'>Name: {props.name} </p>
            <Balance 
                amount={props.balance}
            />
        </div>
    )
}