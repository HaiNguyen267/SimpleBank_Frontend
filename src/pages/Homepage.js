import { useContext } from 'react'
import { UserContext } from '../components/UserContext'
import Balance from '../components/Balance'
import PromtLogin from '../components/PromtLogin'
import ActionList from '../components/ActionList'
import RegistrationConfirmPage from './RegistrationConfirmPage'

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