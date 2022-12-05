
import { Link } from 'react-router-dom'
export default function AlreadyLoggedInMessage() {
    return (
        <div>
                <p className="message">You've already logged in</p>
                <Link className="link" to='/'>
                    <p className='nav-link'>
                        Click here to go back
                    </p>
                </Link>
            </div>
    )
}