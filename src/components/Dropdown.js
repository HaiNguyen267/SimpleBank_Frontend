import {  useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from './UserContext'
export default function Dropdown(props) {
    const navigate = useNavigate()
    const [user, setUser, jwtToken, setJwtToken] = useContext(UserContext)
    const styleName = props.display ? "Dropdown-display" : "Dropdown-hidden"

    function setUserToAnonymous() {
        setJwtToken(null)
        navigate('/')
    }
    return (
        <div className={styleName}>
            <Link className='dropdown-item link' to='/profile'>My profile</Link>
            <p className='dropdown-item' onClick={setUserToAnonymous}>Logout</p>
        </div>
    )
}