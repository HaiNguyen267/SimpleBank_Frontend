import AppLogo from './AppLogo'
import Profile from './Profile'
import './style.css'
function Header() {
    return (
        <div className="Header">
            <AppLogo />
            <Profile />
        </div>
    )
}

export default Header