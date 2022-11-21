import AppLogo from './AppLogo'
import Profile from './Profile'
import { UserContext } from './UserContext'
import { useState } from 'react'
function Header() {
    return (
        <div className="Header">
            <AppLogo />
            <Profile />
        </div>
    )
}

export default Header