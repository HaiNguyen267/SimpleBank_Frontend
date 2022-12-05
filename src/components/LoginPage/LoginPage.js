
import { useState, useContext } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import Modal from '../shared-components/Modal';
import { useNavigate } from "react-router-dom";
import Message from "../shared-components/Message";

import AlreadyLoggedInMessage from '../shared-components/AlreadyLoggedInMessage';
import axios from 'axios'
import "./style.css"

export default function LoginPage() {
    const BACKEND_URL = 'https://simplebankbackend-production.up.railway.app'
    const navigate = useNavigate();
    const [user, setUser, jwtToken, setJwtToken] = useContext(UserContext)
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

    function LoginForm() {
        function UsernamPasswordLogin() {

            const [username, setUsername] = useState('')
            const [password, setPassword] = useState('')
    
            const validateAlLFields = () => {
                if (!username) {
                    setMessage("Invalid username")
                    return false
                }
    
                if (!password) {
                    setMessage("Invalid password")
                    return false
                }
    
                return true
            }
    
            const handleUsernamePasswordLogin = async () => {
                if (!validateAlLFields()) {
                    setShowMessage(true)
                    return
                }
                const data = {
                    username: username,
                    password: password
                }
    
    
                const response = await axios.post(`${BACKEND_URL}/login`, data)
                setSuccess(response.data.success)
                setMessage(response.data.message)
                setShowMessage(true)
    
    
                if (response.data.success) {
                    setJwtToken(response.data.jwtToken)
                    setShowMessage(false)
                    navigate('/')
                }    
    
            }
            return (
                <>
                    <div onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleUsernamePasswordLogin()
                        }
                    }}>
                        <input
                            className="form-item username-password-login"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className="form-item username-password-login"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
    
                    <button
                        className="ok-btn"
                        onClick={handleUsernamePasswordLogin}
    
                    >Login</button>
                </>
            )
        }
    
        function Oauth2Login() {
            const handleOauth2Login = useGoogleLogin({
                onSuccess: async (tokenResponse) => {
                    const response = await axios.post(`${BACKEND_URL}/oauthlogin`, {
                        accessToken: tokenResponse.access_token
                    })
    
                    setJwtToken(response.data.jwtToken)
                    navigate('/')
                }
            });
    
            return (
                <div>
                    <div
                        className="form-item oauth2-login"
                        onClick={handleOauth2Login}
                    >
                        <img className="oauth2-icon" src="https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png" alt="" />
                        <p >Login with Google</p>
                    </div >
                    <Link
                        className="form-item oauth2-login link"
                        to='/register'
                    >
                        <p>Register new account</p>
                    </Link >
    
                </div>
            )
        }
        return (
            <div className="LoginPage form" >

                <p className='page-name'>Login</p>

                <UsernamPasswordLogin />
                <Oauth2Login />
            </div>

        )
    }

    return (
        !user.isAuthenticated ?
        <>
                <LoginForm />
                    <Modal
                        child={
                            <Message
                                success={success}
                                message={message}
                            />
                        }
                        openModal={showMessage}
                        setOpenModal={setShowMessage}
                    />
        </>

            :
            <AlreadyLoggedInMessage />

    )
}