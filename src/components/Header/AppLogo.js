import { Link } from 'react-router-dom'
import './style.css'

function AppLogo() {
    return (
        <div className="AppLogo">
            <Link to='/'>
                <img id="bank-logo" src="https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png" alt="" />
            </Link>
            <p id='app-name'>Simple Bank</p>
        </div>
    )
}

export default AppLogo