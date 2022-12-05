import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Balance from '../shared-components/Balance'
import PromtLogin from '../shared-components/PromtLogin'
import ActionList from './ActionList'
import RegistrationConfirmPage from '../shared-components/RegistrationConfirmPage'
import './style.css'

export default function Homepage() {

    const [user, setUser] = useContext(UserContext)
    console.log("in the home page");
    console.log(user);


    function Page() {
        return (
            <>
                {user.enabled ?
                    <>
                        <Balance amount={user.balance} />
                        <ActionList />
                    </>
                    :
                    <RegistrationConfirmPage />
                }
            </>
        )
    }
    return (
        <div className="Homepage">
            <p className='greeting-message'>Hi, {user.name}!</p>
            {user.isAuthenticated ?
                <Page />
                :
                <PromtLogin />
            }
        </div>
    )
}